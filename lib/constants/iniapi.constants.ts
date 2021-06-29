export enum IniapiPaymethod {
  /** 신용카드 */
  Card = 'Card',
  /** 실시간계좌이체 */
  Acct = 'Acct',
  /** 가상계좌 */
  Vacct = 'Vacct',
  /** 가상계좌 (입금 전, 채번취소시 사용) */
  GVacct = 'GVacct',
  /** 휴대폰 */
  HPP = 'HPP',
  /** 현금영수증 */
  Receipt = 'Receipt',
  /** 상품권 */
  Voucher = 'Voucher',
  /** 페이팔 */
  Paypal = 'Paypal',
  /** 알리페이 */
  Apay = 'Apay',
  /** 위쳇페이 */
  TPAY = 'TPAY',
}
