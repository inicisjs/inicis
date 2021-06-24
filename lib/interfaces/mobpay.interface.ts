import { MobpayMethod } from '../constants';

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
