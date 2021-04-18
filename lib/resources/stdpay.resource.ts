import { validateOrReject } from 'class-validator';

import { StdPayGetParamsInput } from 'lib/dtos/stdpay.dto';
import { InicisOptions } from 'lib/interfaces';

export class InicisStdpay {
  constructor(private readonly options: InicisOptions) {}

  async getParams(input: StdPayGetParamsInput) {
    await validateOrReject(input);
  }
}
