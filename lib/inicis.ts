import { InicisOptions } from './interfaces';
import { InicisStdpay } from './resources';

export class Inicis {
  stdpay: InicisStdpay;

  constructor(private readonly options: InicisOptions) {
    this.stdpay = new InicisStdpay(options);
  }
}
