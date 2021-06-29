import { IniapiPaymethod } from '../constants';

export type IniapiCommonRequestParams = {
  /** 전문생성시간 [YYYYMMDDhhmmss] */
  timestamp: string;

  /** 가맹점 요청 서버IP (추후 거래 확인 등에 사용됨) */
  clientIp: string;

  /** 상점아이디 */
  mid: string;

  /** 전문위변조 HASH (hash(INIAPIKey+type+paymethod+timestamp+clientIp+mid)) */
  hashData: string;
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
};
