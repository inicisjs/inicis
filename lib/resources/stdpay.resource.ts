import { validateOrReject } from 'class-validator';
import { hash, sign } from 'lib/helpers/sign';

import { STDPAY_BASE_PARAMS } from '../constants/stdpay.constants';
import { StdPayGetParamsInput, StdPayRequestParams } from '../dtos/stdpay.dto';
import { getRandomString } from '../helpers/string';
import { InicisOptions } from '../interfaces';

export class InicisStdpay {
  constructor(private readonly inicisOptions: InicisOptions) {}

  async getParams(input: StdPayGetParamsInput): Promise<StdPayRequestParams> {
    await validateOrReject(input);

    const timestamp = new Date().getTime();
    const oid = `${timestamp}${getRandomString(4)}`;

    const { mid, signkey } = this.inicisOptions;

    const mKey = hash(signkey, 'sha256');
    const signature = sign({
      oid,
      price: input.price,
      timestamp,
    });

    return {
      ...input,
      ...STDPAY_BASE_PARAMS,
      mid,
      oid,
      timestamp,
      mKey,
      signature,
    };
  }
}
