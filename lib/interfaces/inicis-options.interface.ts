export type InicisOptions = {
  /**
   * 상점 아이디
   */
  mid: string;

  /**
   * PC 결제에서 사용자 위변조 방지를 위해 HASH 값을 생성하여 대조할 때 사용됩니다.
   * signkey 는 반드시 상점아이디(mid) 와 매칭되는 key 로 세팅하셔야 합니다.
   */
  signkey: string;
};
