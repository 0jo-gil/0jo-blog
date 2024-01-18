---
title: 'React Rollup 라이브러리'
date: '2024-01-18'
category: 'React'
summary: 'React + TypeScript + Rollup을 활용한 라이브러리 개발을 위한 환경셋팅'
slug: 'react-rollup-library'
---


다양한 프로젝트를 진행하면서 조금 더 생산성있고 확장 가능한 라이브러리 개발에 대한 필요성을 느꼈다.
npm에 배포된 다양한 라이브러리를 사용하면서 어떤 환경에서 개발되었는지, 어떤 방식으로 개발해야할지 고민을 했다.
나름의 보일러플레이트를 만들어두고 환경을 구성하면서 겪었던 시행착오를 기록하려고 한다.

추후 해당 보일러플레이트를 활용하여 나만의 디자인 시스템 라이브러리를 우선적으로 개발해보려고 한다.


우선적으로, 사용하는 환경은 React, TypeScript, Rollup을 통한 개발이므로 필요 패키지 설치를 진행한다.


### 1. React 환경
React, react-dom은 `peerDependencies`로 설치한다. (실제 패키지에 직접 import하지 않고 호환성이 필요한 경우)

```
yarn add --peer react react-dom
yarn add -D @types/react @types/react-dom
```

---

### 2. TypeScript 환경

**TypeScript install**

```
yarn add -D typescript
```


**TypeScript 설정**

루트 디렉토리에 tsconfig.json 파일을 생성하고 아래 내용을 추가한다.
실제 필요한 설정은 각 프로젝트 성격에 맞게 설정하여 사용한다.

```
{
  "compilerOptions": {
    "target": "es6",
    "baseUrl": "./",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "module": "ESNext",
    "declaration": true,
    "declarationDir": "./dist",
    "sourceMap": true,
    "outDir": "./dist",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "emitDeclarationOnly": true,
    "removeComments": true
  },
  "paths": {
    "@/*": ["packages/*"]
  },
  "include": [
    "src/**/*",
    "**/*.tsx",
    "packages"
  ],
  "exclude": [
    "*.config.js",
    "packages/**/node_modules/*.d.ts",
    "**/dist/**/*",
    "node_modules/*.d.ts",
  ],
  "types": [
    "jest"
  ]
}
```

---

### 3. Rollup 환경

**Rollup 플러그인 설치**

```
yarn add -D rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external @rollup/plugin-imge @rollup/plugin-alias @rollup/plugin-babel
```

위에 알 수 없는 패키지 리스트를 `devDependencies` 로 설치했는데 리스트를 간단하게 정리하면 아래와 같다.

- rollup-plugin-typescript2: TypeScript 파일을 컴파일하는 rollup 플러그인
- @rollup/plugin-commonjs: CommonJS 모듈을 ES6로 변환하는 rollup 플러그인
- @rollup/plugin-node-resolve: node_modules에서 모듈을 불러오는 rollup 플러그인
- rollup-plugin-peer-deps-external: peerDependencies로 설치된 패키지를 external로 설정하는 rollup 플러그인 (번들링 결과에 포함하지 않고 import로 사용)
- @rollup-plugin-image: 이미지 파일을 불러오는 rollup 플러그인


**rollup.config.js**
루트 디렉토리에 rollup.config.js 파일을 생성하고 아래 내용을 추가한다.

```
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');
const extensions = ['js', 'jsx', 'ts', 'tsx'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      dts,
      peerDepsExternal(),
      resolve({ extensions }),
      babel({
        extensions,
        include: ['packages/src/**/*'],
        exclude: /node_modules/,
        babelHelpers: 'runtime',
      }),
      commonjs({
        include: /node_modules/,
      }),
      postcss({
        extract: true,
        extract: 'index.css',
      }),
      typescript({

      })
    ],
    external: ['react', 'react-dom', 'styled-components']
  }
];
```

위 설정은 아래와 같은 역할을 한다.

- `input`: 각 src/index.ts 파일을 받아와서 번들링한다.
- `output`: 번들링 결과를 cjs, esm 형태로 내보낸다.
- `extensions`: 번들링할 파일의 확장자를 지정한다.

 
추가적으로 import한 다양한 라이브러리의 역할은 위 의존성 설치에서 설명한바와 같다.

그리고 빌드를 위한 명령어를 package.json에 추가한다.

```
"scripts": {
    ...
    "build": "rollup -c --bundleConfigAsCjs",
    ...
}
```

---

### 4. Babel 환경

React, styled-components를 활용할거라 Babel 환경을 구성한다.

**Babel 플러그인 설치**

```
yarn add -D babel babel-plugin-styled-components babel-preset-react-app
```


**babel.config.js, babel.config.json**
루트 디렉토리에 babel.config.js, babel.config.json 파일을 생성하고 아래 내용을 추가한다.


```
// babel.config.js
module.exports = {
    presets: [
        require.resolve('@babel/preset-env'),
        require.resolvwe('@babel/preset-typescript'),
        [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    ],
    plugins: [
        'babel-plugin-styled-components',
    ]
}
```

```
// babel.config.json
{
    "testEnvironment": "jsdom",
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "roots": [
        "src"
    ],
    "moduleNameMapper": {
        "src/(.*)": "<rootDir>/src/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "transform": {
        "\\.js$": "<rootDir>/node_modules/babel-jest",
        "\\.jsx$": "<rootDir>/node_modules/babel-jest"
    },
    "plugins": [
        "babel-plugin-styled-components"
    ]
}
```


### 적용과정

위 설정을 마쳤으면 packages 디렉토리에서 커스텀 라이브러리 개발을 진행하면 된다.

디렉토리 구조는 아래와 같다.

```
packages/
├── src/
├──── index.ts
...
```

위 디렉토리 구조에서 개발을 진행완료 했으면 위 설정한 빌드 명령어를 실행한다.

``` 
yarn build
```

그러면 dist 디렉토리에 번들링 결과가 생성된다.


### 마치면서
실제 위 내용을 직접 적용하면서 '이렇게 사용해도 되나?'라고 생각이 들면서 우당탕탕 결과적으로 보일러 플레이트를 만들게 되었다.
styled-components를 같이 활용하기 위해서 babel 환경을 구성하는데 뭔가 애를 먹었지만 그래도 어렵지 않게 환경구성을 완료했다.

위 보일러 플레이트를 기반으로 디자인 시스템 라이브러리를 직접 구축해보려고 한다.

추후 라이브러리를 개발하면서 겪는 다양한 시행착오 역시 기록을 남겨보겠다.