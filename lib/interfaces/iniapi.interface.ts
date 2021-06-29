import { IniapiPaymethod } from '../constants';

export type IniapiCommonRequestParams = {
  /** 전문생성시간 [YYYYMMDDhhmmss] */
  timestamp: string;

  /** 가맹점 요청 서버IP (추후 거래 확인 등에 사용됨) */
  clientIp: string;

  /** 상점아이디 */
  mid: string;
};

/** 거래조회 */
export type IniapiGetTransactionRequestParams = IniapiCommonRequestParams & {
  /** "Extra" 고정 */
  type: 'Extra';

  /** "Inquiry" 고정 */
  paymethod: 'Inquiry';

  /** 원거래 TID */
  originalTid: string;

  /** 주문번호 (* "주문번호 중복방지" 계약 시, originalTid 값 없이 oid 로만 거래조회 가능) */
  oid: string;

  /** 전문위변조 HASH (hash(INIAPIKey+type+paymethod+timestamp+clientIp+mid)) */
  hashData: string;
};

/** 일반(전액) 취소 */
export type IniapiRefundRequestParams = IniapiCommonRequestParams & {
  /** "Refund" 고정 */
  type: 'Refund';

  /** 지불수단 코드 */
  paymethod: IniapiPaymethod;

  /** 취소요청 승인TID */
  tid: string;

  /** 취소요청사유 */
  msg: string;

  /** 전문위변조 HASH (hash(INIAPIKey+type+paymethod+timestamp+clientIp+mid+tid)) */
  hashData: string;
};

/** 부분 취소 */
export type IniapiPartialRefundRequestParams = IniapiCommonRequestParams & {
  /** "PartialRefund" 고정 */
  type: 'PartialRefund';

  /** 지불수단 코드 */
  paymethod: IniapiPaymethod;

  /** 취소요청 승인TID */
  tid: string;

  /** 취소요청사유 */
  msg: string;

  /** 취소요청금액 */
  price: number;

  /** 부분취소 후 남은금액 */
  confirmPrice: number;

  /** 통화코드 [WON,USD] */
  currency: 'WON' | 'USD';

  /** 부가세 */
  tax: number;

  /** 비과세 */
  taxFree: number;

  /** 전문위변조 HASH (hash(INIAPIKey+type+paymethod+timestamp+clientIp+mid+tid+price+confirmPrice)) */
  hashData: string;
};

export type IniapiCommonResult = {
  /** 결과코드 ["00"성공, 그외 실패] */
  resultCode: string;

  /** 결과메세지 */
  resultMsg: string;
};

export type IniapiGetTransactionResult = IniapiCommonResult & {
  /** 거래TID */
  tid: string;

  /** 거래금액 */
  price: number;

  /** 거래상태 ["0":승인, "1":취소, "9":거래없음] (* 가상계좌 거래시 ["N":입금대기, "Y":입금완료,"C":입금 전 취소]) */
  status: '0' | '1' | '9' | 'N' | 'Y' | 'C';

  /** 지불수단 (* 해외결제만 전달) */
  paymethod?: IniapiPaymethod;

  /** 상점 주문번호 (* 해외결제만 전달) */
  oid?: string;

  /** 승인번호 (* 해외결제만 전달) */
  applNum?: string;

  /** 원화승인금액 (* 해외결제만 전달) */
  priceExchange?: number;

  /** 환율 (* 해외결제만 전달(은련카드 제외)) */
  rtExchange?: number;

  /** 승인일자 (* ISP 결제만 전달) */
  applDate?: string;

  /** 승인시간 (* ISP 결제만 전달) */
  applTime?: string;
};

export type IniapiRefundResult = IniapiCommonResult & {
  /** 취소일자 [YYYYMMDD] */
  cancelDate: string;

  /** 취소시간 [hhmmss] */
  cancelTime: string;

  /** 현금영수증 취소승인번호 (* 현금영수증 발행건에 한함) */
  cshrCancelNum: string;
};

export type IniapiPartialRefundResult = IniapiCommonResult & {
  /** 부분취소 TID */
  tid: string;

  /** 원거래 TID */
  prtcTid: string;

  /** 부분취소금액 */
  prtcPrice: number;

  /** 부분취소 후 남은 금액 */
  prtcRemains: number;

  /** 부분취소 요청 횟수 */
  prtcCnt: number;

  /** 부분취소 구분 ["0":재승인방식, "1":부분취소] */
  prtcType: '0' | '1';

  /** 부분취소일자 [YYYYMMDD] */
  prtcDate: string;

  /** 부분취소시간 [hhmmss] */
  prtcTime: string;
};
