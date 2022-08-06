# My Pocket
![7](https://user-images.githubusercontent.com/105365737/182876914-b3bacbb3-73e1-4217-b2e4-ff87c3e70d93.gif)
> React 연습을 위해 진행한 가계부 프로젝트입니다.<br/>
> 선택한 연도 별도 별로 수입/지출 내용을 확인할 수 있고, 월별 지출 차트를 통해 해당 연도의 월별 지출 현황을 확인할 수 있습니다.<br/><br/>
> 데모 페이지 : https://sypear.github.io/my-pocket/ (반응형 디자인 미적용)
<br/>

## 🗓️ 프로젝트 기간
> 기획 및 디자인 : 2022-08-02<br/>
> 퍼블리싱 : 2022-08-02 ~ 2022-08-03<br/>
> 기능 구현 : 2022-08-03 ~ 2022-08-04<br/>
> 코드 리팩토링 및 버그 픽스 : 2022-08-05 ~ 진행 중
<br/>

## 🎨 디자인 시안
![Untitled-1 co3py](https://user-images.githubusercontent.com/105365737/182871461-74de069d-510d-46a1-8107-070b88c55243.png)

<br/>

## 🌲 컴포넌트 구조
### 컴포넌트 트리
![진짜최종트리](https://user-images.githubusercontent.com/105365737/183232633-85c5f270-37fe-4448-997f-b20d29b3cbeb.png)

<br/>

### 디자인 시안을 기반으로 한 컴포넌트 구조
![진짜제발최종시안](https://user-images.githubusercontent.com/105365737/183232629-26b7078c-9e81-4ccc-8025-8f03f3b3ee7b.png)

<br/>

### 컴포넌트 설명
* Chart : 차트 컴포넌트
  - ChartBar : 개별 차트 바
<br/>

* DateLabel : 날짜를 yyyy-mm-dd 형태로 출력하는 컴포넌트
<br/>

* Filter : 연도 별 필터 컴포넌트
<br/>

* Item : 개별 아이템 컴포넌트
<br/>

* NewItemContainer : 내역 추가 관련 컴포넌트
  - NewItem : 내역 추가 영역
    - NewItemForm : 내역 추가 폼
<br/>

* PocketContainer : 자산 현황, 연간 내역, 월 별 지출 차트 관련 컴포넌트
  - PocketStatus : 자산 현황
  - PocketList : 연간 내역
    - PocketItems : 개별 내역
  - PocketChart : 월 별 지출 차트
<br/>

## ✔️ 목표 기능
* 필터링 기능
  - [x] 연도별 내역 필터링 기능 추가
* 자산 현황 관리
  - [x] 자산 합계
  - [x] 수입 합계
  - [x] 지출 합계
* 수입/지출 관리
  - [x] 수입/지출 내역 출력
    - [x] 내역 출력 시 정렬 적용 (최근 날짜 기준 정렬, 날짜가 같은 경우 최신순 정렬)
  - [x] 수입/지출 내역 추가
    - [x] 내역 추가 시 내역 년도에 맞게 필터 자동 설정
  - [x] 수입/지출 내역 삭제
* 월 별 지출 차트
  - [x] 월 별 지출 계산
  - [x] 월 별 지출 차트 출력
  - [x] 차트에 마우스 오버 시 지출 금액 출력
* 목표 기능 외 추가 기능
  - [x] 로컬스토리지 저장 기능
<br/>

## 🌐 지원 브라우저
> 최종 확인 일자 : 2022-08-04

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- |
| last version(103.0.1264.77)| last version(103.0.5060.134)| last version(103.0.1)| last version(89.0.4447.83)
<br/>
