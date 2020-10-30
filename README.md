nextjs(react) + mobx + typescript 의 조합으로 초기 프로젝트 구조 입니다.
제가 생각하는 프로젝트 구조와 컴퍼넌트 작성 방식, 상태 관리 가이드가 있습니다.
더 좋은 방향이 있으시다면 바꾸어서 사용하셔면 됩니다!

####1. 주요 library
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

####2. 폴더 구성
```bash
.
├── .next           # nextjs 빌드 폴더
├── node_modules    # npm library 폴더
├── public          # favicon, robots.txt 등의 파일
├── @types          # custom type module 정의 (주로 type이 없는 외부 라이브러리를 정의)
├── src             # app sources
│   ├── assets      # 정적 파일 모음 (이미지, 동영상, 문서 등등)
│   |   └── xxx
│   ├── components  # 화면 구성에 필요한 컴포넌트
│   |   ├── layout  # 화면 layout 모음
│   |   |   └── xxx  # layout 명칭(ex- full-screen, main, spacial 등등)
│   |   |   |   ├── index.tsx   # Component 정의 파일
│   |   |   |   └── styled.tsx  # style, styled-component 정의 파일
│   |   ├── templates  # 화면 template 모음
│   |   |   └── xxx  # template 명칭(ex- main, auth, dashboard 등등)
│   |   |   |   ├── index.tsx   # Component 정의 파일
│   |   |   |   └── styled.tsx  # style, styled-component 정의 파일    
│   |   ├── ui  # 화면 ui 모음
│   |   |   ├── atoms         # 원자 단위 개념의 component (input, button, text 등등)
│   |   |   |   └── buttons   # button 관련 atomic 컴포넌트
│   |   |   |   |   └── xxx-button   # 버튼 명칭
│   |   |   |   |   |   ├── index.tsx   # component 정의 파일
│   |   |   |   |   |   └── styled.tsx  # style, styled-component 정의 파일
│   |   |   ├── molecules     # 분자(원자들의 조합) 단위 개념의 component (form-item, card, text-lable 등등)
│   |   |   |   |   └── xxx-button   # 버튼 명칭
│   |   |   |   |   |   ├── index.tsx   # component 정의 파일
│   |   |   |   |   |   └── styled.tsx  # style, styled-component 정의 파일
│   |   |   └── organims    # template 명칭(ex- main, auth, dashboard 등등)
│   |   |   |   ├── index.tsx   # Component 정의 파일
│   |   |   |   └── styled.tsx  # style, styled-component 정의 파일     
│   ├── 
│   ├── 
│   ├── 
│   ├── 
│   ├── 
│   ├── 
│   ├── 
│   └── on-simplicity-in-technology.md
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
│   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
│   ├── _base.scss
│   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid front matter
```
 
  
