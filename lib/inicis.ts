import { InicisOptions } from './interfaces';
import { InicisStdpay, InicisMobpay } from './resources';

export class Inicis {
  stdpay: InicisStdpay;
  mobpay: InicisMobpay;

  constructor(private readonly options: InicisOptions) {
    this.stdpay = new InicisStdpay(options);
    this.mobpay = new InicisMobpay(options);
  }
}
