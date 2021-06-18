import axios from 'axios';

import { STDPAY_BASE_PARAMS } from '../constants/stdpay.constants';
import {
  StdPayAuthInput,
  StdPayAuthResult,
  StdPayGetParamsInput,
  StdPayRequestParams,
} from '../interfaces/stdpay.interface';
import { hash, sign, getRandomString } from '../helpers';
import { InicisOptions } from '../interfaces';

export class InicisStdpay {
  constructor(private readonly inicisOptions: InicisOptions) {}

  getParams(
    input: Partial<StdPayGetParamsInput>
  ): Partial<StdPayRequestParams> {
    const {
      timestamp = new Date().getTime(),
      oid = `${timestamp}${getRandomString(4)}`,
      price,
    } = input;

    const { mid, signkey } = this.inicisOptions;

    const mKey = hash(signkey, 'sha256');
    const signature = sign({
      oid,
      price,
      timestamp,
    });

    return {
      ...STDPAY_BASE_PARAMS,
      ...input,
      mid,
      oid,
      timestamp,
      mKey,
      signature,
    };
  }

  async auth(input: StdPayAuthInput): Promise<StdPayAuthResult> {
    const { mid } = this.inicisOptions;
    const {
      authToken,
      authUrl,
      netCancelUrl,
      timestamp = new Date().getTime(),
      charset = 'UTF-8',
      format = 'JSON',
    } = input;

    /** SHA256 Hash값 [대상: authToken, timestamp] */
    const signature = sign({
      authToken,
      timestamp,
    });
    const authForm = {
      mid,
      authToken,
      signature,
      timestamp,
      charset,
      format,
    };

    try {
      const { data: response } = await axios.post<StdPayAuthResult>(
        authUrl,
        authForm
      );
      const secureSignature = sign({
        mid,
        tstamp: timestamp,
        MOID: response.MOID,
        TotPrice: response.TotPrice,
      });

      if (response.resultCode !== '0000') {
        return { ...response, isSuccess: false };
      }

      if (response.authSignature !== secureSignature) {
        return await axios.post(netCancelUrl, authForm);
      }

      return { ...response, isSuccess: true };
    } catch (error) {
      return error;
    }
  }
}
