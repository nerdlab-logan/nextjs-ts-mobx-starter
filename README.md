nextjs(react) + mobx + typescript 의 조합으로 초기 프로젝트 구조 입니다.
제가 생각하는 프로젝트 구조와 컴퍼넌트 작성 방식, 상태 관리 가이드가 있습니다.
더 좋은 방향이 있으시다면 바꾸어서 사용하셔면 됩니다!

#### 1. 주요 library
- core
    + nextjs - ssr를 하기 위한 react 프레임워크
    + typescript - 자바스크립트의 superset
    + mobx - 상태 관리 프레임워크
    + axios - http 통신 라이브러리    
- css
    + tailwind - utility css 프레임워크
    + emotion - css in js 라이브러리
    + twin.macro - `tailwindcss + emotion`을 편리하게 쓰기위한 라이브러리
- quality
    + eslint - 일관된 코드 품질 유지를 위한 라이브러리
    + prettier - 코드 포맷터 라이브러리 (코딩 스타일 유지에 편리함)

#### 2. 폴더 구성
```bash
.
├── .next           # nextjs 빌드 폴더
├── node_modules    # npm library 폴더
├── public          # favicon, robots.txt 등의 파일
├── @types          # custom type module 정의 (주로 type이 없는 외부 라이브러리를 정의)
├── src             # app sources
|   ├── apis        # api 모음
|       ├── internal-api  # 프로젝트 api 서버
|       └── external-api  # 외부 api(kakao, naver 등등)
│   ├── assets      # 정적 파일 모음 (이미지, 동영상, 문서 등등)
│   |   ├── styles   # css 설정
│   |   └── xxx
│   └── components  # 화면 구성에 필요한 컴포넌트
│   |   ├── layout  # 화면 layout 모음
│   |   |   └── xxx  # layout 명칭(ex- full-screen, main, spacial 등등)
│   |   |       ├── index.tsx   # Component 정의 파일
│   |   |       └── styled.tsx  # style, styled-component 정의 파일
│   |   ├── templates  # 화면 template 모음 (여러개의 organisms으로구성됨)
│   |   |   └── xxx  # template 명칭(ex- main, auth, dashboard 등등)
│   |   |       ├── index.tsx   # Component 정의 파일
│   |   |       └── styled.tsx  # style, styled-component 정의 파일    
│   |   └── ui  # 화면 ui 모음
│   |       ├── atoms         # 원자 단위 개념의 component (input, button, text 등등)
│   |       |   └── buttons   # button 관련 atomic 컴포넌트
│   |       |       └── xxx-button   # 버튼 명칭
│   |       |           ├── index.tsx   # component 정의 파일
│   |       |           └── styled.tsx  # style, styled-component 정의 파일
│   |       ├── molecules     # 분자(원자들의 조합) 단위 개념의 component (form-field, card, text-lable 등등)
│   |       |   └── cards  # 카드형태의 컴포넌트
│   |       |       └── xxx-card   # 카드 명칭 
│   |       |           ├── index.tsx   # component 정의 파일
│   |       |           └── styled.tsx  # style, styled-component 정의 파일
│   |       └── organisms     # 유기체(분자들의 조합) 단위 개념의 component(ex- list, form, detail 등등)
│   |           └── movie  # 무비 관련 컴포넌트
│   |               └── xxx-list   # 리스트 명칭 
│   |                   ├── index.tsx   # component 정의 파일
│   |                   └── styled.tsx  # style, styled-component 정의 파일     
|   ├── core
│   |   ├── constatns  # 공용으로 사용되는 상수 모음
│   |   ├── hooks      # 공용으로 사용되는 hook 모음
│   |   ├── library    # 공용으로 사용되는 library 모음
│   |   └── utils      # 각종 유틸 함수 모음
|   ├── pages    # 라이팅 페이지 구성
|   └── stores   # 상태 관리 store(mobx)
│       ├── xxx  # 스토어 명(비지니스 domain)
|       |   ├── model  # 스토어에 사용되는 domain object
|       |   |   └── xxx.model.ts 
|       |   └── xxx.store.ts
|       └── store.context.ts   # 글로벌 스토어 설정   
├── .gitignore
├── .babelrc           # 바벨 설정
├── .env.development   # 개발용 환경설정
├── .env.production    # 운영용 환경설정
├── .eslintrc.json     # eslint 설정
├── .prettierrc        # prettier 설정
├── tailwind.config.js  # tailwind css 설정
├── tsconfig.json       # typescript 설정 
├── tsconfig.path.json  # typescript 경로 설정
├── package.json
└── README.md
```
 
#### 3. 네이밍 규칙
- 디렉토리명은 복수형으로 작성합니다.
- `components`, `pages` 폴더 제외하고 폴더 명을 **subfix** 붙여줍니다.
  + 예시) `utils > xxx.util.ts`, `stores > xxx.store.ts`
- 컴포넌트 작성지 확장자는 `tsx` 입니다.

#### 4. 아토믹 디자인 컴포넌트 작성 가이드
- 공통
  + emotion + tailwindcss로 컴퍼넌트 스타일을 작성합니다. 
  + 컴포넌트 작성시 `index.tsx`,`styled.tsx` 두개의 파일로 구성됩니다.
    * `index.tsx` 컴퍼넌트 구현부
    * `styled.tsx` styled component 작성
  + 추가 css작성시 emotion를 이용한 css in js 방식으로 하거나 컴포넌트 내`css.ts` 파일을 만들어서 작성합니다.
- page (재사용성 x)
  + 1개의 템플릿으로 구성됩니다.
  + 화면을 구성하는 component 간의 state(data), method 등을 공유 합니다.(controller 역할)
  + 페이지 사용되는 event, method 등을 정의 합니다.
    * 예시) 데이터 조회, 클릭 이벤트
- layout (재사용성 o)
  + template의 틀을 제공합니다.
  + header, footer, side-menu 등의 구성을 가진 컴포넌트 입니다.
  + 각 영역의 컴포넌트들은 해당 layout 하위 폴더을 만들어서 사용합니다.
    * 예시) layout > xxx > elements > xxx-header > index.tsx, styled.tsx  
- template
  + 화면 구성을 담당합니다. (와이어프레임 단계라고 보시면 됩니다.)
  + 1개의 레이아웃으로 구성 됩니다.
- organisms (재사용성 x)
  + template의 한 영역을 담당합니다.
  + 폴더 분류 기준은 도메인 이나 화면으로 합니다.
    - 예시) main, dashboard, todo, user 등등
  + 여러개의 molecule component로 구성 되는것이 정석이나 없이도 가능합니다.(추후 리펙토링)
- molecules (재사용성 △)
  + organisms의 구성품 입니다.
  + 폴더 분류 기준은 유형으로 합니다.
    * 예시) card, form-field, list-item  등등
  + 여러개의 atomic component로 구성 되는것이 정석이나 없이도 가능합니다.(추후 리펙토링) 
- atomic
  + html tag 수준의 컴포넌트 입니다.
  + 폴더 분류 기준은 유형으로 합니다.
    * 예시) button, label, text 등등

#### 5. mobx 작성 가이드 
- 공통 사항
  + DDD 설계 & 개발 개념을 사용합니다.
  + domain > sub-domain > domain-model 트리 구조 입니다.
  + contextApi 사용하여 글로벌 스토어를 만듭니다.
    * store.context.ts에 작성합니다. 
- domain
  + stores 하위 폴더로 구현됩니다.
  + business domain layer 개념입니다.
    * 예시) user, post, order 등
  + 특이사항으로 UI 관련된 도메인이 있을수 있습니다.
- sub-domain
  + domain 디렉토리 안에 store(구현체)입니다.
  + 비지니스 로직을 담당합니다.
  + 파일은 {domain}.store.ts 또는 {domain}-{role}.store.ts 형식으로 만듭니다.
- domain-model
  + state class 또는 entity 라고 보면 됩니다.
  + domain > model 디렉토리에 위치합니다.
  + 파일은 {xxx}.model.ts 형식으로 만듭니다.
