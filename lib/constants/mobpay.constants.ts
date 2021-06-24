export enum MobpayMethod {
  /** 신용카드 */
  Card = 'CARD',
  /** 실시간계좌이체 */
  Bank = 'BANK',
  /** 가상계좌(무통장입금) */
  VBank = 'VBANK',
  /** 휴대폰 */
  Mobile = 'MOBILE',
  /** 문화상품권 */
  Culture = 'CULTURE',
  /** 해피머니상품권 */
  Hpmn = 'HPMN',
  /** 전자지갑 */
  Ewallet = 'EWALLET',
  /** 알리페이,페이팔 외 기타 */
  Etc = 'ETC_',
}
