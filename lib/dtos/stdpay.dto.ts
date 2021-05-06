export class StdPayGetParamsInput {
  /**
   * 요청지불수단입니다.
   * - 생략시 전체 결제수단을 표시합니다.
   * - 대/소문자 구분하여 세팅바랍니다.
   * - 여러지불수단 사용 시 구분자는 ":"(콜론)을 사용합니다.
   * - 허용되는 값은 (GoPayMethod)를 참고하세요.
   */
  gopaymethod?: string;

  /**
   * 결제 금액
   * - 숫자만, 1달러는 100으로 시작
   */
  price: number;

  /**
   * 결제 금액
   * - 숫자만, 1달러는 100으로 시작
   */
  currency?: string;

  /**
   * 상품명
   * - 40Byte 초과 요청시 37Byte + ...으로 자동 변환 (inicis에서)
   */
  goodname: string;

  /**
   * 구매자명
   * - 30Byte 초과 요청시 30Byte로 자동 변환 (inicis에서)
   */
  buyername: string;

  /**
   * 구매자 휴대폰번호
   * - 숫자와 "-" 만 허용
   */
  buyertel: string;

  /**
   * 구매자 이메일주소
   * - "@", "." 외 특수문자 입력불가
   */
  buyeremail: string;

  /**
   * 결과수신 URL
   */
  returnUrl: string;

  /**
   * 결제창 닫기 URL
   */
  closeUrl: string;

  /**
   * 가맹점 임의 데이터 (인증결과수신 구간에서 전달)
   * - 한글 입력불가, 한글입력은 urlencode 필수
   */
  merchantData?: string;
}

export class StdPayRequestParams extends StdPayGetParamsInput {
  /**
   * 전문 버전 ["1.0" 고정]
   */
  version: string;

  /**
   * 상점아이디
   */
  mid: string;

  /**
   * 주문번호
   * - 반드시 Unique 값으로 생성 (거래추적 시 사용됨)
   */
  oid: string;

  /**
   * 타임스템프 [TimeInMillis(Long형)]
   */
  timestamp: number;

  /**
   * SHA256 Hash값 [대상: oid, price, timestamp]
   */
  signature: string;

  /**
   * SHA256 Hash값 [대상: mid 와 매칭되는 signkey]
   */
  mKey: string;
}
