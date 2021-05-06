import {
  InicisBankCode,
  InicisCardCode,
  InicisSourceCode,
  StdPayPayMethod,
} from '../constants';
import { InicisCommonResult, InicisOptions } from './inicis.interface';

/** inicis.stdpay.getParamsn 함수의 input parameter type */
export type StdPayGetParamsInput = {
  /**
   * 요청지불수단입니다.
   * - 생략시 전체 결제수단을 표시합니다.
   * - 대/소문자 구분하여 세팅바랍니다.
   * - 여러지불수단 사용 시 구분자는 ":"(콜론)을 사용합니다.
   * - 허용되는 값은 (InicisPayMethod)를 참고하세요.
   * @default '' */
  gopaymethod?: string;

  /** 결제 금액 (* 숫자만, 1달러는 100으로 시작) */
  price: number;

  /** 통화구분 ["WON":한화,"USD":달러] (* USD는 카드 결제만 가능)
   * @default 'WON' */
  currency?: string;

  /** 상품명 (* 40Byte 초과 요청시 37Byte + ...으로 자동 변환 (inicis에서)) */
  goodname: string;

  /** 구매자명 (* 30Byte 초과 요청시 30Byte로 자동 변환 (inicis에서)) */
  buyername: string;

  /** 구매자 휴대폰번호 (* 숫자와 "-" 만 허용) */
  buyertel: string;

  /** 구매자 이메일주소 (* "@", "." 외 특수문자 입력불가) */
  buyeremail: string;

  /** 결과수신 URL
   * @default '' */
  returnUrl?: string;

  /** 결제창 닫기 URL
   * @default '' */
  closeUrl?: string;

  /** 가맹점 임의 데이터 (인증결과수신 구간에서 전달)
   * - 한글 입력불가, 한글입력은 urlencode 필수
   * @default '' */
  merchantData?: string;
};

/** inicis.stdpay.getParamsn 함수의 return type */
export type StdPayRequestParams = Pick<InicisOptions, 'mid'> &
  StdPayGetParamsInput & {
    /** 전문 버전 ["1.0" 고정] */
    version: '1.0';

    /** 주문번호 (* 반드시 Unique 값으로 생성 (거래추적 시 사용됨)) */
    oid: string;

    /** 타임스템프 [TimeInMillis(Long형)] */
    timestamp: number;

    /** SHA256 Hash값 [대상: oid, price, timestamp] */
    signature: string;

    /** SHA256 Hash값 [대상: mid 와 매칭되는 signkey] */
    mKey: string;
  };

/** 이니시스 웹표준결제 인증결과 (클라이언트에서 사용) */
export type StdPayResult = Pick<InicisOptions, 'mid'> &
  InicisCommonResult & {
    /** 주문번호 (* 결제요청 시 세팅한 주문번호) */
    orderNumber: string;

    /** 승인요청 검증 토큰 */
    authToken: string;

    /** 승인요청 Url (* 해당 URL로 HTTPS API Request 승인요청 - POST) */
    authUrl: string;

    /** 망취소요청 Url (* 승인요청 후 승인결과 수신 실패 / DB저장 실패 시) */
    netCancelUrl: string;

    /** 인증결과 인코딩 ['UTF-8', 'EUC-KR']
     * @default 'UTF-8' */
    charset?: 'UTF-8' | 'EUC-KR';

    /** 가맹점 임의 데이터 */
    merchantData: string;
  };

/** inicis.stdpay.auth 함수의 input parameter type */
export type StdPayAuthInput = Pick<InicisOptions, 'mid'> &
  Pick<StdPayResult, 'authToken' | 'authUrl' | 'netCancelUrl' | 'charset'> & {
    /** 타임스템프 [TimeInMillis(Long형)] */
    timestamp: string;

    /** 리턴형식 ['XML', 'JSON', 'NVP']
     * @default 'JSON' */
    format?: 'XML' | 'JSON' | 'NVP';

    /** 인증 가격 (* 옵션 필드 (제외가능)) */
    price?: number;
  };

/** inicis.stdpay.auth 함수의 return type */
export type StdPayAuthResult = InicisCommonResult & {
  /** 거래번호 */
  tid: string;

  /** 상품명 */
  goodName: string;

  /** 결제금액 */
  TotPrice: number;

  /** 주문번호 (* 결제 요청시 oid 필드에 설정된 값) */
  MOID: String;

  /** 승인번호 (* 지불수단에 따라 미전송) */
  applNum: string;

  /** 승인일자 [YYYYMMDD] */
  applDate: string;

  /** 승인시간 [hh24miss] */
  applTime: string;

  /** 이벤트 코드, 카드 할부 및 행사 적용 코드 */
  EventCode: string;

  /** 구매자명 */
  buyerName: string;

  /** 구매자 휴대폰번호 */
  buyerTel: string;

  /** 구매자 이베일주소 */
  buyerEmail: string;

  /** 최종 이메일주소 */
  custEmail: string;
} & StdPayAuthPayMethodResult;

/** inicis.stdpay.auth 함수의 지불수단별 추가 return type */
export type StdPayAuthPayMethodResult =
  | {
      /** 지불수단 */
      payMethod: StdPayPayMethod;
    }
  | StdPayAuthCardResult
  | StdPayAuthDirectBankResult
  | StdPayAuthVBankResult
  | StdPayAuthHPPResult
  | StdPayAuthPOINTResult
  | StdPayAuthGiftCardResult
  | StdPayAuthPhoneBillResult;

/** 신용카드인 경우에 추가되는 paramter들 */
export type StdPayAuthCardResult = {
  /** 지불수단 = 신용카드 */
  payMethod: StdPayPayMethod.Card;

  /** 신용카드번호 */
  CARD_Num: string;

  /** 무이자할부 여부 ["1":무이자할부] */
  CARD_Interest: '0' | '1';

  /** 카드 할부기간 */
  CARD_Quota: string;

  /** 카드사 코드 */
  CARD_Code: InicisCardCode;

  /** 카드구분 ["0":개인카드, "1":법인카드, "9":구분불가, "":승인실패] */
  CARD_CorpFlag: '0' | '1' | '9' | '';

  /** 카드종류 ["0":신용카드, "1":체크카드, "2":기프트카드] */
  CARD_CheckFlag: '0' | '1' | '2';

  /** 부분취소 가능여부 ["1":가능 , "0":불가능] */
  CARD_PRTC_CODE: '1' | '0';

  /** 카드발급사(은행) 코드 */
  CARD_BankCode: InicisBankCode;

  /** 간편(앱)결제구분 */
  CARD_SrcCode: InicisSourceCode;

  /** 카드포인트 사용여부 ["":카드 포인트 사용안함, "1":카드 포인트 사용] */
  CARD_Point: '' | '1';

  /** 실제 카드승인 금액 */
  CARD_CouponPrice: number;

  /** 쿠폰(즉시할인) 금액 */
  CARD_CouponDiscount: number;

  /** 포인트 사용금액 */
  CARD_UsePoint: number;

  /** 네이버포인트 무상포인트 */
  NAVERPOINT_UseFreePoint: number;

  /** 네이버포인트 현금영수증 발행여부 ["Y":발행, "N":미발행] */
  NAVERPOINT_CSHRApplYN: 'Y' | 'N';

  /** 네이버포인트 현금영수증 발행 금액 */
  NAVERPOINT_CSHRApplAmt: number;

  /** 통화코드 */
  currency: string;

  /** 달러 환전금액 (* 해외카드 + 달러(USD) 결제일 경우 환전금액) */
  OrgPrice: number;

  /** 신용카드 빌링키 (* 빌키발급 요청시에만 반환	) */
  CARD_Billkey?: string;
};

/** 실시간계좌이체인 경우에 추가되는 paramter들 */
export type StdPayAuthDirectBankResult = {
  /** 지불수단 = 실시간계좌이체 */
  payMethod: StdPayPayMethod.DirectBank;

  /** 은행코드 */
  ACCT_BankCode: InicisBankCode;

  /** 현금영수증 발행 정상여부 ["220000": 정상] */
  CSHR_ResultCode: '220000' | '';

  /** 현금영수증구분 ["0":소득공제, "1":지출증빙] */
  CSHR_Type: '0' | '1';

  /** 계좌주명 */
  ACCT_Name: string;
};

/** 가상계좌(무통장입금)인 경우에 추가되는 paramter들 */
export type StdPayAuthVBankResult = {
  /** 지불수단 = 가상계좌(무통장입금) */
  payMethod: StdPayPayMethod.VBank;

  /** 가상계좌번호 */
  VACT_Num: string;

  /** 입금은행코드 */
  VACT_BankCode: InicisBankCode;

  /** 입금은행명 */
  vactBankName: string;

  /** 예금주명 */
  VACT_Name: string;

  /** 송금자명 (* 결제창 내 입력한 '송금자명')
   * @default 구매자명값 */
  VACT_InputName: string;

  /** 입금기한일자 [YYYYMMDD] */
  VACT_Date: string;

  /** 입금기한시각 [hhmmss] */
  VACT_Time: string;
};

/** 휴대폰(통신사)결제인 경우에 추가되는 paramter들 */
export type StdPayAuthHPPResult = {
  /** 지불수단 = 휴대폰(통신사)결제 */
  payMethod: StdPayPayMethod.HPP;

  /** 휴대폰번호 */
  HPP_Num: string;

  /** 결제장치 */
  payDevice: string;

  /** 휴대폰 빌링키 (* 빌키발급 요청시에만 반환) */
  HPP_Billkey?: string;
};

/** 포인트결제인 경우에 추가되는 paramter들 */
export type StdPayAuthPOINTResult = {
  /** 지불수단 = 포인트결제 */
  payMethod: StdPayPayMethod.POINT;

  /** 포인트 사용구분 */
  PayOption: string;

  /** OK CashBag 카드번호 */
  OCB_Num: string;

  /** OK CashBag 지불금액 */
  OCB_PayPrice: number;

  /** OK CASHBAG 적립 승인번호 */
  OCB_SaveApplNum: string;

  /** OK CASHBAG 사용내역 승인번호 */
  OCB_PayApplNum: string;

  /** OK CASHBAG 승인일시 */
  OCB_ApplDate: string;

  /** U포인트 카드번호 */
  UPoint_Num: string;

  /** U포인트 가용포인트 */
  UPoint_usablePoint: number;

  /** U포인트 승인요청 금액 */
  UPoint_ApplPrice: number;

  /** U포인트 지불구분 */
  UPNT_PayOption: string;

  /** U포인트 복합결제시 여신 승인금액 */
  UPNT_SavePrice: number;

  /** U포인트 지불금액 */
  UPNT_PayPrice: number;

  /** GS포인트 승인금액 */
  GSPT_ApplPrice: number;

  /** GS포인트 적립금액 */
  GSPT_SavePrice: number;

  /** GS포인트 지불금액 */
  GSPT_PayPrice: number;
};

/** 상품권 결제인 경우에 추가되는 parameter들 */
export type StdPayAuthGiftCardResult = {
  /** 지불수단 = 상품권 */
  payMethod: StdPayPayMethod.GiftCard;

  /** 컬쳐랜드 고객 ID */
  CULT_UserID: string;

  /** 스마트문화상품권 사용한 카드개수 */
  GAMG_Cnt: number;

  /** 스마트문화상품권 승인금액 */
  GAMG_ApplPrice: number;

  /** 스마트문화상품권 카드번호 */
  GAMG_Num1: string;

  /** 스마트문화상품권 카드결제금액 */
  GAMG_Price1: number;

  /** 틴캐시 승인금액 */
  TEEN_ApplPrice: number;

  /** 틴개시 사용자아이디 */
  TEEN_UserID: string;

  /** 틴캐시 승인번호 */
  TEEN_ApplNum: string;

  /** 도서상품권 승인금액 */
  BCSH_ApplPrice: number;

  /** 도서상품권 사용자아이디 */
  BCSH_UserID: string;

  /** 도서상품권 승인번호 */
  BCSH_ApplNum: string;
};

/** 전화결제인 경우에 추가되는 parameter들 */
export type StdPayAuthPhoneBillResult = {
  /** 지불수단 = 전화결제 */
  payMethod: StdPayPayMethod.PhoneBill;

  /** 승인 전화번호 */
  PHNB_Num: string;
};
