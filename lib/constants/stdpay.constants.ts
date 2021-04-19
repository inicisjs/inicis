import { StdPayRequestParams } from '../dtos/stdpay.dto';

export const STDPAY_BASE_PARAMS: Pick<
  StdPayRequestParams,
  'version' | 'gopaymethod' | 'currency' | 'returnUrl' | 'closeUrl'
> = {
  version: '1.0',
  gopaymethod: '',
  currency: 'WON',
  returnUrl: '',
  closeUrl: '',
};
