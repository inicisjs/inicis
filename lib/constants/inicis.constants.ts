/** 카드사 코드 */
export enum InicisCardCode {
  /** 외환카드 */
  Keb = '01',

  /** 롯데카드 */
  Lotte = '03',

  /** 현대카드 */
  Hyundai = '04',

  /** 국민카드 */
  Kb = '06',

  /** 비씨카드 */
  Bc = '11',

  /** 삼성카드 */
  Samsung = '12',

  /** 신한카드 */
  Shinhan = '14',

  /** 한미카드 */
  Hanmi = '15',

  /** NH농협카드 */
  Nh = '16',

  /** 하나SK카드 */
  Hanask = '17',

  /** 해외비자 */
  Visa = '21',

  /** 해외마스터 */
  Master = '22',

  /** 해외JCB */
  Jcb = '23',

  /** 해외아멕스 */
  Amex = '24',

  /** 해외다이너스 */
  Diners = '25',

  /** 네이버포인트 (포인트 100% 사용) */
  NaverPoint = '91',

  /** 토스머니 (포인트 100% 사용) */
  TossMoney = '93',

  /** SSG머니 (포인트 100% 사용) */
  SsgMoney = '94',

  /** 엘포인트 (포인트 100% 사용) */
  LPoint = '96',

  /** 카카오머니 */
  KakaoMoney = '97',

  /** 페이조 (포인트 100% 사용) */
  Payco = '98',
}

/** 은행 코드 */
export enum InicisBankCode {
  /** 한국산업은행 */
  Kdb = '02',

  /** 기업은행 */
  Ibk = '03',

  /** 국민은행 */
  Kb = '04',

  /** 하나은행 (구. 외환) */
  Keb = '05',

  /** 국민은행 (구. 주택) */
  Housing = '06',

  /** 수협중앙회 */
  ShBank = '07',

  /** 농협중앙회 */
  NhBank = '11',

  /** 단위농협 */
  Nonghyup = '12',

  /** 축협중앙회 */
  ChBank = '16',

  /** 우리은행 */
  Woori = '20',

  /** 구)조흥은행 */
  Chohung = '21',

  /** 상업은행 */
  Commercial = '22',

  /** SC제일은행 */
  Sc = '23',

  /** 한일은행 */
  Hanil = '24',

  /** 서울은행 */
  Seoul = '25',

  /** 구)신한은행 */
  ExShinhan = '26',

  /** 한국씨티은행 (구. 한미) */
  Hanmi = '27',

  /** 대구은행 */
  Daegu = '31',

  /** 부산은행 */
  Busan = '32',

  /** 광주은행 */
  Kwangju = '34',

  /** 제주은행 */
  Jeju = '35',

  /** 전북은행 */
  Jeonbuk = '37',

  /** 강원은행 */
  Kangwon = '38',

  /** 경남은행 */
  Kyongnam = '39',

  /** 비씨카드 */
  BcCard = '41',

  /** 신용협동조합중앙회 */
  Cu = '48',

  /** 상호저축은행 */
  MutualSavings = '50',

  /** 한국씨티은행 */
  Citi = '53',

  /** 홍콩상하이은행 */
  Hsbc = '54',

  /** 도이치은행 */
  Deutsche = '55',

  /** ABN암로 */
  AbnAmro = '56',

  /** JP모건 */
  JpMorgan = '57',

  /** 미쓰비시도쿄은행 */
  MitsubishiTokyo = '59',

  /** BOA(Bank of America) */
  Boa = '60',

  /** 산림조합 */
  Sj = '64',

  /** 신안상호저축은행 */
  Shinan = '70',

  /** 우체국 */
  EPost = '71',

  /** 하나은행 */
  Hana = '81',

  /** 평화은행 */
  Peace = '83',

  /** 신세계 */
  Shinsegae = '87',

  /** 신한(통합)은행 */
  Shinhan = '88',

  /** 케이뱅크 */
  KBank = '89',

  /** 카카오뱅크 */
  KakaoBank = '90',

  /** 네이버포인트 (포인트 100% 사용) */
  NaverPoint = '91',

  /** 토스머니 (포인트 100% 사용) */
  TossMoney = '93',

  /** SSG머니 (포인트 100% 사용) */
  SsgMoney = '94',

  /** 엘포인트 (포인트 100% 사용) */
  LPoint = '96',

  /** 카카오머니 */
  KakaoMoney = '97',

  /** 페이조 (포인트 100% 사용) */
  Payco = '98',
}

/** 간편(앱) 결제 구분 */
export enum InicisSourceCode {
  Payco = 'C',
  SamsungPay = 'B',
  /** 삼성페이(체크) */
  SamsungPayCheck = 'D',
  SsgPay = 'G',
  KakaoPay = 'O',
  LPay = 'L',
  /** 국민앱카드 */
  KBPay = 'K',
  KPay = 'A',
  TossPay = 'H',
  NaverPay = 'I',
  ChaiPay = 'R',
  TMoneyPay = 'U',
}
