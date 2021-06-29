import { StdPayRequestParams } from '../interfaces/stdpay.interface';

export const STDPAY_BASE_PARAMS: Pick<
  StdPayRequestParams,
  'version' | 'gopaymethod' | 'currency'
> = {
  version: '1.0',
  gopaymethod: '',
  currency: 'WON',
};

export enum StdPayPayMethod {
  /** 신용카드 */
  Card = 'Card',

  /** 실시간계좌이체 */
  DirectBank = 'DirectBank',

  /** 가상계좌(무통장입금) */
  VBank = 'VBank',

  /** 휴대폰 */
  HPP = 'HPP',

  /** 폰빌, 전화결제 */
  PhoneBill = 'PhoneBill',

  /** 문화상품권 */
  Culture = 'Culture',

  /** 스마트문상 */
  DGCL = 'DGCL',

  /** 도서문화상품권 */
  Bcsh = 'Bcsh',

  /** 해피머니상품권 */
  HPMN = 'HPMN',

  /** 케이페이 */
  Kpay = 'Kpay',

  /** 틴캐시 */
  TeenCash = 'TeenCash',

  /** 페이핀 */
  Paypin = 'Paypin',

  /** OKCashbag 포인트 */
  OCBPoint = 'OCBPoint',

  /** 포인트 */
  POINT = 'POINT',

  /** 상품권 */
  GiftCard = 'GiftCard',

  /** 카카오페이 다이렉트 옵션
   * (간편결제 다이렉트 호출 시 '신용카드 전용화면' 계약이 되어있어야 합니다.) */
  onlykakaopay = 'onlykakaopay',
}

export const StdpayVbankNotiWhitelist = [
  '203.238.37.15',
  '39.115.212.9',
  '183.109.71',
];
