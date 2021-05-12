import { getRandomString } from '../helpers';
import {
  MobpayGetParamsInput,
  MobpayRequestParams,
} from '../interfaces/mobpay.interface';
import { InicisOptions } from '../interfaces';

export class InicisMobpay {
  constructor(private readonly inicisOptions: InicisOptions) {}

  getParams(input: MobpayGetParamsInput): MobpayRequestParams {
    const { mid, mname } = this.inicisOptions;

    return {
      P_MID: mid,
      P_MNAME: mname,
      P_OID: `${new Date().getTime()}${getRandomString(4)}`,
      ...input,
    };
  }
}
