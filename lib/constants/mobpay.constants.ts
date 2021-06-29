export enum MobpayMethod {
  /** 신용카드 */
  CARD = 'CARD',
  /** 실시간계좌이체 */
  BANK = 'BANK',
  /** 가상계좌(무통장입금) */
  VBANK = 'VBANK',
  /** 휴대폰 */
  MOBILE = 'MOBILE',
  /** 문화상품권 */
  CULTURE = 'CULTURE',
  /** 해피머니상품권 */
  HPMN = 'HPMN',
  /** 전자지갑 */
  EWALLET = 'EWALLET',
  /** 알리페이,페이팔 외 기타 */
  ETC_ = 'ETC_',
}

export const MobpayVbankNotiWhitelist = [
  '118.129.210.25',
  '183.109.71.153',
  '203.238.37.15',
];
