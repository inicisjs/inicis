<p align="center">
  <a href="https://www.inicis.com/" target="blank"><img src="https://www.inicis.com/wp-content/themes/inicis2020/assets/images/sub07-010301.png" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">KG Inicis client for <a href="https://nodejs.org/" target="_blank">Node.js</a></p>

<p align="center">
    <a href="https://www.npmjs.com/package/inicis" target="_blank">
        <img src="https://img.shields.io/npm/v/inicis.svg" alt="NPM Version" />
    </a>
    <a href="https://github.com/greatSumini/inicis/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/npm/l/inicis.svg" alt="Package License" />
    </a>
    <a href="https://github.com/greatSumini/inicis/actions/workflows/ci.yml">
        <img src="https://github.com/greatSumini/inicis/workflows/CI/badge.svg" />
    </a>
    <a href="https://www.npmjs.com/package/inicis" target="_blank">
        <img src="https://img.shields.io/npm/dm/inicis.svg" alt="NPM Downloads" />
    </a>
    <a href="https://coveralls.io/github/greatSumini/inicis?branch=master" target="_blank">
        <img src="https://coveralls.io/repos/github/greatSumini/inicis/badge.svg?branch=master#9" alt="Coverage" />
    </a>
    <a href="https://github.com/greatSumini/inicis" target="_blank">
        <img src="https://img.shields.io/github/stars/greatSumini/inicis?style=social">
    </a>
</p>

이 모듈은 KG이니시스에서 제공하는 API를 [Node.js®](https://nodejs.org/)로 구현한 클라이언트입니다.<br>
KG INICIS의 개발 가이드는 [여기](https://manual.inicis.com/main/)를 참고하시기 바랍니다.<br>
이 라이브러리를 사용하여 발생하는 손실이나 문제는 책임지지 않습니다.

## Requirements

- [nodejs](https://github.com/nodejs/node) >= 0.12.x

## Installation

```
$ npm install --save inicis
```

## Features

- stdpay
  - [ ] getParams
  - [ ] auth
- mobpay
  - [ ] getParams
  - [ ] auth

## Usage

```typescript
import Inicis from 'inicis';

const inicis = new Inicis({
  mid: 'your mid',
  signkey: 'your signkey',
});

// 웹표준결제에 필요한 파라미터 받아오기
await inicis.stdpay.getParams({
    ...
})
```

## Author

- [Sumin Choi](https://sumini.dev)

## Contribution

- 이 프로젝트는 누구나 참여 가능합니다.
- 버그나 개선점 및 의견 등은 [이슈](https://github.com/greatSumini/inicis/issues) 및 [Pull Request](https://github.com/greatSumini/inicis/compare)를 활용해주세요.

## Links

- KG INICIS 공식 사이트: https://www.inicis.com/
- KG INICIS 개발 가이드: https://manual.inicis.com/main/

## License

This Package is [MIT licensed](https://github.com/greatSumini/inicis/blob/master/LICENSE).

## References

- [inipay-js](https://github.com/ruden91/inipay-js)
- [node-inicis](https://github.com/GwonHyeok/node-inicis)
