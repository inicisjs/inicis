import {
  InicisBankCode,
  InicisCardCode,
  InicisSourceCode,
  MobpayMethod,
} from '../constants';

export type MobpayGetParamsInput = {
  /** 요청지불수단 */
  P_INI_PAYMENT: MobpayMethod;

  /** 주문번호 
    - 반드시 Unique 값으로 생성 (거래추적 시 사용됨)
    @default (timestamp + random string 4자리) */
  P_OID?: string;

  /** 결제금액
    - 숫지만, 콤마(",") 사용불가) */
  P_AMT: number;

  /** 상품명 */
  P_GOODS: string;

  /** 구매자명 */
  P_UNAME: string;

  /** 결과수신 URL */
  P_NEXT_URL: string;

  /** 가상계좌입금통보 URL
    - 가상계좌 결제 시 필수 */
  P_NOTI_URL?: string;

  /** 휴대폰결제 상품유형 [1:컨텐츠, 2:실물]
    - 휴대폰결제 시 필수 / MID 계약사항에 맞게 세팅 */
  P_HPP_METHOD?: '1' | '2';

  /** 구매자 휴대폰번호
    - 숫자와 "-" 만 허용 */
  P_MOBILE?: string;

  /** 구매자 이메일 주소
    - "@", "." 외 특수문자 입력불가 */
  P_EMAIL?: string;

  /** 결과 수신 인코딩 [utf8, euc-kr]
    @default "utf8" */
  P_CHARSET?: 'utf8' | 'euc-kr';

  /** 제공기간 [Y2:년단위결제, M2:월단위결제, YYYYMMDDYYYYMMDD:시작일종료일] */
  P_OFFER_PERIOD?: string;

  /** 할부개월수 노출옵션 [할부개월:할부개월]
    - 금액이 할부조건일 경우 동작 
    @default 일시불~12개월 노출*/
  P_QUOTABASE?: string;

  /** 부가세
    - "부가세 업체정함" 계약가맹점만 설정필요 / 주의사항: 전체금액의 10%이하로 설정 */
  P_TAX?: string;

  /** 비과세 (면세상품 금액)
    - "부가세 업체정함" 계약가맹점만 설정필요 */
  P_TAXFREE?: string;

  /** @TODO: enum 정의 */
  P_CARD_OPTION?;

  /** @TODO: enum 정의 */
  P_ONLY_CARDCODE?;

  /** 가상계좌 입금기한 날짜 [YYYYMMDD]
   * @default (요청일 +10일)*/
  P_VBANK_DT?: string;

  /** 가상계좌 입금기한 시간 [hhmm] */
  P_VBANK_TM?: string;

  /** 가맹점 임의 데이터 */
  P_NOTI?: string;

  /** 지불수단별 추가옵션
   * @TODO: 문서 작성 */
  P_RESERVED?: string;
};

export type MobpayRequestParams = MobpayGetParamsInput & {
  /** 상점아이디 (입력한 mid와 동일) */
  P_MID: string;

  /** 가맹점 이름 (입력한 mname과 동일) */
  P_MNAME?: string;
};

export type MobpayResult = Pick<MobpayGetParamsInput, 'P_AMT' | 'P_NOTI'> & {
  /** 결과코드 ["00": 정상, 이외 실패] */
  P_STATUS: string;

  /** 결과메시지 */
  P_RMESG1: string;

  /** 인증거래번호 (성공시에만 전달) */
  P_TID: string;

  /** 거래금액 */
  P_AMT: number;

  /** 승인요청 URL (해당 URL로 HTTPS API Request 승인요청 - POST) */
  P_REQ_URL: string;

  /** 가맹점 임의 데이터 */
  P_NOTI: string;
};

export type MobpayAuthInput = Pick<MobpayRequestParams, 'P_MID'> &
  Pick<MobpayResult, 'P_TID'>;

export type MobpayAuthResult = Pick<
  MobpayResult,
  'P_STATUS' | 'P_RMESG1' | 'P_TID' | 'P_AMT' | 'P_NOTI'
> &
  Pick<
    MobpayRequestParams,
    'P_MID' | 'P_MNAME' | 'P_OID' | 'P_NEXT_URL' | 'P_NOTI_URL'
  > & {
    /** 승인일자 [YYYYMMDDhhmmss] */
    P_AUTH_DT: string;
  } & {
    // 현금영수증 Fields
    /** 결과코드 ["220000":정상, 그외 실패] */
    P_CSHR_CODE?: string;

    /** 결과메세지 */
    P_CSHR_MSG?: string;

    /** 현금영수증 총 금액 [총금액 = 공급가액+세금+봉사료] */
    P_CSHR_AMT?: number;

    /** 공급가액 */
    P_CSHR_SUP_AMT?: number;

    /** 부가세 */
    P_CSHR_TAX?: number;

    /** 봉사료 */
    P_CSHR_SRVC_AMT?: number;

    /** 용도구분 ["0":소득공제, "1":지출증빙] */
    P_CSHR_TYPE?: '0' | '1';

    /** 발행일시 [YYYYMMDDhhmmss] */
    P_CSHR_DT?: string;

    /** 발행 승인번호 (* 가상계좌는 채번시점에선 미전달 (입금통보로 전달)) */
    P_CSHR_AUTH_NO?: string;

    // KPAY Fields
    /** KPAY 실 승인금액 */
    P_KPAY_APPL_PRICE?: number;

    /** KPAY 지불수단 [CARD, ISP, HPP] */
    P_KPAY_PAYMETHOD?: 'CARD' | 'ISP' | 'HPP';

    /** KPAY 할부개월 */
    P_KPAY_QUOTA?: string;

    /** KPAY 무이자구분 ["0":일반, "1":무이자] */
    P_KPAY_INST?: '0' | '1';

    /** KPAY 카드구분 ["0":신용,"1":체크,"2":기프트] */
    P_KPAY_CHECK_FLG?: '0' | '1' | '2';
  } & MobpayAuthPayMethodResult;

export type MobpayNetCancelInput = Pick<
  MobpayRequestParams,
  'P_MID' | 'P_AMT' | 'P_OID'
> &
  Pick<MobpayResult, 'P_TID'> & {
    /** 위변조 방지 HASH 값 (권장) */
    P_CHKEFAKE?: string;

    /** 타임스템프 [TimeInMillis(Long형)] (* P_CHKFAKE 세팅 시 반드시 함께 세팅필요) */
    P_TIMESTAMP?: number;
  };

export type MobpayNetCancelResult = Pick<
  MobpayAuthResult,
  'P_STATUS' | 'P_RMESG1' | 'P_TID'
>;

/** inicis.stdpay.auth 함수의 지불수단별 추가 return type */
export type MobpayAuthPayMethodResult =
  | {
      /** 지불수단 */
      P_TYPE: Exclude<MobpayMethod, 'CARD' | 'BANK' | 'VBANK' | 'MOBILE'>;
    }
  | MobpayAuthCardResult
  | MobpayAuthBankResult
  | MobpayAuthVBankResult
  | MobpayAuthMobileResult;

export type MobpayAuthCardResult = {
  P_TYPE: MobpayMethod.CARD;

  /** 발급사(은행) 코드 */
  P_CARD_ISSUER_CODE: InicisBankCode;

  /** 가맹점번호 (* 자체가맹점인 경우) */
  P_CARD_MEMBER_NUM?: string;

  /** 매입사코드 (* 자체가맹점인 경우) */
  P_CARD_PURCHASE_CODE?: string;

  /** 부분취소 가능여부 ["0":불가능, "1":가능] */
  P_CARD_PRTC_CODE: '0' | '1';

  /** 상점부담 무이자 할부여부 ["1":상점부담 무이자] */
  P_CARD_INTEREST: string;

  /** 카드구분 ["0":개인카드,"1":법인카드,"9":구분불가] (* 승인실패 시 빈값 전달)*/
  CARD_CorpFlg: '0' | '1' | '9' | '';

  /** 카드종류 ["0":신용, "1":체크, "2":기프트] */
  P_CARD_CHECKFLG: '0' | '1' | '2';

  /** 신용카드 할부개월 */
  P_RMESG2: string;

  /** 카드코드 */
  P_FN_CD1: InicisCardCode;

  /** 결제카드사 한글명 */
  P_FN_NM: string;

  /** 카드번호 */
  P_CARD_NUM: string;

  /** 승인번호 (* 신용카드 거래에만 사용) */
  P_AUTH_NO: string;

  /** VP 카드코드 */
  P_ISP_CARDCODE: string;

  /** 쿠폰사용 유무 ["1":사용] */
  P_COUPONFLG: string;

  /** 쿠폰사용 금액 */
  P_COUPON_DISCOUNT: number;

  /** 실제 카드승인 금액 */
  P_CARD_APPLPRICE: number;

  /** 간편(앱)결제여부 */
  P_SRC_CODE?: InicisSourceCode;

  /** 포인트 사용금액 */
  P_CARD_USEPOINT: number;

  /** 네이버포인트 무상포인트 */
  NAVERPOINT_UseFreePoint?: string;

  /** 네이버포인트 현금영수증 발급여부 ["Y":발행, "N":미발행] */
  NAVERPOINT_CSHRApplYN?: 'Y' | 'N';

  /** 네이버포인트 현금영수증 발행 금액 */
  NAVERPOINT_CSHRApplAmt?: number;

  /** 롯데카드 임직원 제휴 구분코드 ["L": 임직원] (*롯데카드인 경우만 임직원 구분코드 전달) */
  CARD_EmpPrtnCode?: string;

  /** 카드사 제휴구분코드 ["P":롯데카드일반, "M":롯데카드모바일, "H":현대카드(통합)] */
  CARD_NomlMobPrtnCode: 'P' | 'M' | 'H' | undefined;
};

export type MobpayAuthBankResult = {
  P_TYPE: MobpayMethod.BANK;

  /** 은행코드 */
  P_FN_CD1: InicisBankCode;

  /** 결제은행 한글명 */
  P_FN_NM: string;
};

export type MobpayAuthVBankResult = {
  P_TYPE: MobpayMethod.VBANK;

  /** 가상계좌번호 */
  P_VACT_NUM: string;

  /** 채번은행코드 */
  P_VACT_BANK_CODE: InicisBankCode;

  /** 채번은행 한글명 */
  P_FN_NM: string;

  /** 입금마감일자 [YYYYMMDD] */
  P_VACT_DATE: string;

  /** 입금마감시간 [hhmmss] */
  P_VACT_TIME: string;

  /** 계좌주명 */
  P_VACT_NAME: string;
};

export type MobpayAuthMobileResult = {
  P_TYPE: MobpayMethod.MOBILE;

  /** 휴대폰통신사 [*** 고정] */
  P_HPP_CORP: string;

  /** 결제 휴대폰번호 */
};

export type MobpayVbankNoti = {
  /** 거래상태 [00:가상계좌 채번, 02:가상계좌입금통보] */
  P_STATUS: '00' | '02';

  /** 거래번호 */
  P_TID: string;

  /** 지불수단 [VBANK:가상계좌] */
  P_TYPE: 'VBANK';

  /** 승인일자 [YYMMDDhhmmss] */
  P_AUTH_DT: string;

  /** 상점아이디 */
  P_MID: string;

  /** 상점주문번호 */
  P_OID: string;

  /** 은행코드 */
  P_FN_CD1: InicisBankCode;

  /** 금융사코드 (빈값으로 전달) */
  P_FN_CD2: '';

  /** 입금은행명 */
  P_FN_NM: string;

  /** 거래금액 */
  P_AMT: number;

  /** 주문자명 */
  P_UNAME: string;

  /** 메세지1 [채번된 가상계좌번호|입금기한] */
  P_RMESG1: string;

  /** 메세지2 (빈값전달) */
  P_RMESG2: string;

  /** 가맹점 임의 데이터 */
  P_NOTI: string;

  /** 승인번호 (빈값전달) */
  P_AUTH_NO: '';

  /** 현금영수증 거래금액 (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_AMT?: number;

  /** 현금영수증 공급가액 (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_SUP_AMT?: number;

  /** 현금영수증 부가가치세 (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_TAX?: number;

  /** 현금영수증 봉사료 (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_SRVC_AMT?: number;

  /** 현금영수증 거래구분 ["0":소득공제용, "1":지출증빙용 ] (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_TYPE?: '0' | '1';

  /** 현금영수증 발행일자 [YYYYMMDDhhmmss] (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_DT?: string;

  /** 현금영수증 발행승인번호 (* 현금영수증 발급요청 건에 한함) */
  P_CSHR_AUTH_NO?: string;
};
