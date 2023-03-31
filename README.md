# ☔ Purple Weather Calendar 소개

![Untitled](https://user-images.githubusercontent.com/99721472/229025978-80023826-ce07-4d1c-a771-6a3012b5ffdf.png)
지정한 Google calendar와 연동되는 캘린더와 현재 날씨 정보를 제공하는 Caledar App 입니다. google cloud에서 제공하는 key를 사용하여 로컬 환경에서 이용할 수 있습니다. API key 등 필요한 변수들을 얻는 방법은 [2.설치 및 설정 가이드](#2-설치-및-설정-가이드) 를 참고해주세요.
<br/>

### **기능 시연**

![모든기능능](https://user-images.githubusercontent.com/99721472/229110370-a5b7cddf-3a9c-4903-b78d-4cfb7b15ce63.gif)

### **Stacks**

<img src="https://img.shields.io/badge/Typescript-02569B?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<br/><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/axios-purple?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/recoil-black?style=for-the-badge&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/mui-007bf7?style=for-the-badge&logo=mui&logoColor=white"><br/> <img src="https://img.shields.io/badge/emotion-hotpink?style=for-the-badge&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/eslint-7C7CEA?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1F313A?style=for-the-badge&logo=prettier&logoColor=white">

<br/>

### **관련 문서**

- [Google OAuth 로그인 구현 방법](https://caramel-sail-b9f.notion.site/google-Oauth-a27decfb39494d05b6b7348fe3df793f)

- fullcalendar 사용 방법(예정)
- 날씨 컴포넌트 구현 과정(예정)

<br/>
<br/>

# 1 기능 가이드 📖

### 1.1 **Google OAuth 로그인**

지정한 `google calendar ID`의 calendar에 새로운 일정을 추가하기 위해서는 구글 OAuth 로그인이 필요합니다.
![로그인](https://user-images.githubusercontent.com/99721472/229087295-235ed9ea-2723-4365-908f-af68c0a20e27.gif)

<br/>

### 1.2 **Google Calendar 일정 확인**

![캘린더read2](https://user-images.githubusercontent.com/99721472/229093553-9d5064d8-a5da-451e-ab2b-abf976a88529.gif)

Google Calendar에서 작성한 일정을 확인할 수 있습니다.
![캘린더구글에서작성](https://user-images.githubusercontent.com/99721472/229092689-f5baf16e-38d4-4099-a36a-d4fe3f5fe22b.gif)

<br/>

### 1.3 **Google calendar 일정 페이지로 이동**

![calendar구글링크](https://user-images.githubusercontent.com/99721472/229092677-803e6d08-02cb-487b-8fcd-6087e7d25080.gif)
이벤트를 누르면 해당 이벤트의 google calendar 페이로 이동합니다.

<br/>

### 1.4 **새 이벤트 만들기**

![캘린더작성](https://user-images.githubusercontent.com/99721472/229092707-15eabc7a-d228-4d4f-a260-1d955834bdef.gif)
날짜, 시간을 지정하여 이벤트를 작성합니다. 작성한 이벤트는 구글 캘린더에 실시간으로 반영됩니다.

<br/>

### 1.5 **날씨와 옷차림 정보**

![지금날씨](https://user-images.githubusercontent.com/99721472/229092725-0dc1efb6-6f33-48c4-a3cc-51669e3c4fcd.gif)

현재 날씨 정보와 아이콘, 일 최저 최고 기온, 현재 기온에 따른 옷차림을 추천합니다.

### 1.6 **모든 기능**

![모든기능능](https://user-images.githubusercontent.com/99721472/229110370-a5b7cddf-3a9c-4903-b78d-4cfb7b15ce63.gif)

<br />
<br />
<br />

# 2 설치 및 설정 가이드

## 2.1 설치 가이드

설치하기 위해서는 다음 사항이 필요합니다.

- Node.js v16.15.0 이상
- npm 패키지 매니져
  다운로드 후 의존성을 설치 합니다.

```
npm install
```

<br/>
<br/>

## 2.2 설정 가이드

나의 google calendar를 이용하기 위해 아래와 같은 설정이 필요합니다.
<br/>

### **`2.2.1 구글 프로젝트 만들기`**

- [google cloud 만들기](https://cloud.google.com/?hl=ko) 에서 프로젝트 만들기

구글 프로젝트 설정 사항

- [google cloud](https://console.cloud.google.com)
- API및 서비스 - OAuth 동의화면 - 앱 수정
- 범위 추가 또는 삭제
- 아래 범위 추가

```
https://www.googleapis.com/auth/userinfo.email
https://www.googleapis.com/auth/calendar.readonly
https://www.googleapis.com/auth/calendar
https://www.googleapis.com/auth/calendar.events
```

<br/>

### **`2.2.2 환경 변수 얻기`**

자신의 google calendar를 연동하고 앱을 사용하기 위해서는 다음과 같은 환경 변수들이 필요합니다.
google cloud에서 프로젝트를 만들고 google clendar api를 사용합니다.
루트 경로에 `.env` 파일을 만들고 아래 과정을 통해 얻은 환경변수들을 저장합니다. `.env` 파일 설정 방법은 아래 2.2.3 절을 참고합니다.

<br/>

### **2.2.2.1 필요한 google 환경변수 목록**

① google API Key

② google calendar ID

③ google client ID

④ google client secret
<br/>
<br/>

<br/>

**① google API Key 얻기**

```
구글 클라우드 콘솔
https://console.cloud.google.com/apis/dashboard

- 라이브러리에서 calendar api 검색 후 사용 설정
- 사용자 인증 정보에서 'API 키' 생성
```

**② google calendar ID 얻기**

```
구글캘린더 - 내 캘린더 - 사용할 캘린더 '설정' - 캘린더 ID 저장해두기
```

**③ google client ID 얻기** / **④ google client secret 얻기**

```
구글 클라우드 콘솔
https://console.cloud.google.com/apis/dashboard

- 사용자 인증 정보에서 사용자 인증 정보 만들기
- 'Oauth 클라이언트 ID' 생성
- 어플리케이션 타입: 웹 어플리케이션
- URI: http://localhost:3000
- 리디렉션 URI: http://localhost:3000/oauth2callback
- 만들기
- 생성 후 클라이언트 ID, 클라이언트 보안 비밀번호(Client secret) 저장
```

<br/>
<br/>

### **2.2.2.2 필요한 AccuWeather API 환경변수 목록**

⑤ weather API key

⑥ city key

현재 온도, 현재 날씨를 표현하는 아이콘 번호, 체감온도, `일 최저 기온, 일 최고 기온`을 사용하기 위하여 open API를 제공하는 [accuwaether](https://developer.accuweather.com/)를 사용하였습니다.

<br/>
<br/>

**⑤ weather API key 얻기**

- 회원가입
- [My Apps](https://developer.accuweather.com/user/me/apps) - Add a new App
- 새로운 앱 생성
- API key 저장해두기

**⑥ city key 얻기**

- [city search API](https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search)를 사용하여 `key` 값 저장해두기 ([location key 찾기 참고](https://devje.tistory.com/m/105)
  )

<br/>

### **`2.2.3 .env파일 만들기`**

루트 경로에 `.env` 파일을 생성합니다.

```
// .env 파일
REACT_APP_GOOGLE_API_KEY=google API Key             //①
REACT_APP_GOOGLE_CALENDAR_ID=google calendar ID     //②
REACT_APP_GOOGLE_CLIENT_ID=google client ID         //③
REACT_APP_GOOGLE_SECRETE=google client secret       //④
REACT_APP_WEATHER_API_KEY=weather API key           //⑤
REACT_APP_WEATHER_CITY_KEY=city key                 //⑥
```

위의 과정을 통하여 얻은 key들을 ①에서 ⑥까지의 변수에 할당합니다.

### **`2.2.4. 앱 실행`**

아래 명령어를 입력하여 앱을 실행 합니다.

```
npm start
```

---

<br/>

### **+ 진행 상황**

#### **📁 디렉토리 구성**

초기에 mobile, desktop view를 함께 구현하기 위하여 저장소의 pages 폴더에 Weather, Calendar, Main 페이지 파일이 함께 저장되어 있습니다. 분기는 나눠두지 않았습니다. 배포 환경에서도 기능하도록 수정하고 mobile view를 추가할 예정입니다.

#### **😈 에러**

로그인 후 `새로고침하지 않고`, 첫 '이벤트 insert 요청' 시 token이 null로 요청되는 에러가 있습니다. 때문에 axios interceptor로 재요청 하고 있습니다.

`혹시 부족한 부분이 있다면, 말씀해주시면 감사하겠습니다 🙋`
