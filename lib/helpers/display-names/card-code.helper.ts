import { InicisCardCode } from '../../constants';

const {
  Keb,
  Lotte,
  Hyundai,
  Kb,
  Bc,
  Samsung,
  Shinhan,
  Hanmi,
  Nh,
  Hanask,
  Visa,
  Master,
  Jcb,
  Amex,
  Diners,
  NaverPoint,
  TossMoney,
  SsgMoney,
  LPoint,
  KakaoMoney,
  Payco,
} = InicisCardCode;

const CARD_CODE_DISPLAY_NAME_MAPPER = {
  [Keb]: '외환카드',
  [Lotte]: '롯데카드',
  [Hyundai]: '현대카드',
  [Kb]: '국민카드',
  [Bc]: '비씨카드',
  [Samsung]: '삼성카드',
  [Shinhan]: '신한카드',
  [Hanmi]: '한미카드',
  [Nh]: 'NH농협카드',
  [Hanask]: '하나SK카드',
  [Visa]: '해외비자',
  [Master]: '해외마스터',
  [Jcb]: '해외JCB',
  [Amex]: '해외아멕스',
  [Diners]: '해외다이너스',
  [NaverPoint]: '네이버포인트 (포인트 100% 사용)',
  [TossMoney]: '토스머니 (포인트 100% 사용)',
  [SsgMoney]: 'SSG머니 (포인트 100% 사용)',
  [LPoint]: '엘포인트 (포인트 100% 사용)',
  [KakaoMoney]: '카카오머니',
  [Payco]: '페이조 (포인트 100% 사용)',
};

export const getInicisCardCodeDisplayName = (
  cardCode: InicisCardCode
): string => CARD_CODE_DISPLAY_NAME_MAPPER[cardCode];
