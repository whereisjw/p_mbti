# slack

- npm i react react-dom
- npm i -D eslint
- npm i -D prettier eslint-plugin-prettier eslint-config-prettier.

# 코드스플리팅 이모션

npm i @loadable/component
npm i @types/loadable\_\_component //언더바두개임 타입스크립트하면추가하기

```
const Home = loadable(() => import('./pages/Home'));
const Login = loadable(() => import('./pages/Login'));
const Signup = loadable(() => import('./pages/Signup'));
```

- CSS in JS
- Emotion이 설정이 더 간단함(서버사이드렌더링할때도 더쉬움)
- npm i @emotion/react @emotion/styled

# 로그인페이지

- useform 이용해서 유효성검사
