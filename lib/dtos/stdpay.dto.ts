import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';

import { IsCurrency, IsGoPayMethodString } from '../decorators';

export class StdPayGetParamsInput {
  /**
   * 요청지불수단입니다.
   * - 생략시 전체 결제수단을 표시합니다.
   * - 대/소문자 구분하여 세팅바랍니다.
   * - 여러지불수단 사용 시 구분자는 ":"(콜론)을 사용합니다.
   * - 허용되는 값은 (GoPayMethod)를 참고하세요.
   */
  @IsGoPayMethodString()
  @IsOptional()
  gopaymethod?: string;

  /**
   * 결제 금액
   * - 숫자만, 1달러는 100으로 시작
   */
  @IsNumber()
  price: number;

  /**
   * 결제 금액
   * - 숫자만, 1달러는 100으로 시작
   */
  @IsCurrency()
  @IsOptional()
  currency?: string;

  @IsString()
  goodname: string;

  @IsString()
  buyername: string;

  @IsPhoneNumber('KR')
  buyertel: string;

  @IsEmail()
  buyeremail: string;

  @IsUrl()
  returnUrl: string;

  @IsUrl()
  closeUrl: string;
}

export class StdPayGetParamsOutput extends StdPayGetParamsInput {
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
