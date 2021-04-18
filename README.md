# Inicis-Node

<p align="center">
    <a href="https://www.npmjs.com/package/inicis" target="_blank">
        <img src="https://img.shields.io/npm/v/inicis.svg" alt="NPM Version" />
    </a>
    <a href="https://www.npmjs.com/package/inicis" target="_blank">
        <img src="https://img.shields.io/npm/l/inicis.svg" alt="Package License" />
    </a>
    <a href="https://github.com/greatSumini/inicis-node/actions">
        <img src="https://github.com/greatSumini/inicis-node/workflows/CI/badge.svg" />
    </a>
    <a href="https://www.npmjs.com/package/inicis" target="_blank">
        <img src="https://img.shields.io/npm/dm/inicis.svg" alt="NPM Downloads" />
    </a>
    <a href="https://coveralls.io/github/greatSumini/inicis-node?branch=master" target="_blank">
        <img src="https://coveralls.io/repos/github/greatSumini/inicis-node/badge.svg?branch=master#9" alt="Coverage" />
    </a>
    <a href="https://github.com/greatSumini/inicis-node" target="_blank">
        <img src="https://img.shields.io/github/stars/greatSumini/inicis-node?style=social">
    </a>
</p>

이 모듈은 KG이니시스에서 제공하는 API를 [Node.js®](https://nodejs.org/)로 구현한 클라이언트입니다.
KG INICIS의 개발 가이드는 [여기](https://manual.inicis.com/main/)를 참고하시기 바랍니다.

## Features

- 모든 함수는 [Promise](http://www.html5rocks.com/ko/tutorials/es6/promises/)를 반환

## Requirements

- [nodejs](https://github.com/nodejs/node) >= 0.12.x

## Installation

```
$ npm install --save inicis
```

## Usage

```typescript
import Inicis from 'inicis';

const inicis = new Inicis({
  mid: 'your mid',
  signkey: 'your signkey',
});

// 아임포트 고유 아이디로 결제 정보를 조회
iamport.payment
  .getByImpUid({
    imp_uid: 'your imp_uid',
  })
  .then(function (result) {
    // To do
  })
  .catch(function (error) {
    // handle error
  });

// 상점 고유 아이디로 결제 정보를 조회
iamport.payment.getByMerchant({
  merchant_uid: 'your merchant_uid',
});

// 상태별 결제 정보 조회
iamport.payment.getByStatus({
  payment_status: 'your payment_status',
});
```

## Features

미완

## Author

- [Sumin Choi](https://sumini.dev)

## Contribution

- 이 프로젝트는 누구나 참여 가능합니다.
- 버그나 개선점 및 의견 등은 [이슈](https://github.com/greatSumini/inicis-node/issues) 및 [Pull Request](https://github.com/greatSumini/inicis-node/compare)를 활용해주세요.

## Links

- KG INICIS 공식 사이트: https://www.inicis.com/
- KG INICIS 개발 가이드: https://manual.inicis.com/main/

## License

Inicis-Node is [MIT licensed](https://github.com/greatSumini/inicis-node/blob/master/LICENSE).

## References

- [inipay-js](https://github.com/ruden91/inipay-js)
- [node-inicis](https://github.com/GwonHyeok/node-inicis)
