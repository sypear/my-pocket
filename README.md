# My Pocket
![7](https://user-images.githubusercontent.com/105365737/182876914-b3bacbb3-73e1-4217-b2e4-ff87c3e70d93.gif)
> React 연습을 위해 진행한 가계부 프로젝트입니다.<br/>
> 선택한 연도 별도 별로 수입/지출 내용을 확인할 수 있고, 월별 지출 차트를 통해 해당 연도의 월별 지출 현황을 확인할 수 있습니다.<br/><br/>
> 데모 페이지 : https://sypear.github.io/my-pocket/ (반응형 디자인 미적용)
<br/>

## 🌐 지원 브라우저
> 확인 일자 : 2022-08-04

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- |
| last version(103.0.1264.77)| last version(103.0.5060.134)| last version(103.0.1)| last version(89.0.4447.83)
<br/>

## 🗓️ 프로젝트 기간
> 기획 및 디자인 : 2022-08-02<br/>
> 퍼블리싱 : 2022-08-02 ~ 2022-08-03<br/>
> 기능 구현 : 2022-08-03 ~ 2022-08-04
<br/>

## 🎨 디자인 시안
> 사용 툴 : Figma

![Untitled-1 co3py](https://user-images.githubusercontent.com/105365737/182871461-74de069d-510d-46a1-8107-070b88c55243.png)

<br/>

## 🌲 컴포넌트 구조
### 컴포넌트 트리 구조
![다운로드 (2)2](https://user-images.githubusercontent.com/105365737/182862628-18b0881d-8278-4ee2-b220-40e144ee5396.png)

<br/>

### 디자인 시안을 기반으로 한 컴포넌트 구조
![Untitled-311](https://user-images.githubusercontent.com/105365737/182868093-29fa0b8b-7698-4797-b7df-522e4ddd3f39.png)

<br/>

### 컴포넌트 설명
* NewAsset : 수입/지출 내역 추가 관련 컴포넌트
  - NewAssetForm : 수입/지출 내역 추가 폼
<br/>

* Asset : 자산 현황, 수입/지출 내역 조회, 월 별 지출 차트 관련 컴포넌트
  - AssetList : 자산 현황, 수입/지출 내역, 월 별 지출 차트를 통합하는 Div
    - AssetStatus : 자산 현황 관련 컴포넌트
    - AssetItems : 연간 수입/지출 내역 관련 컴포넌트
      - AssetItemsFilter : 연도 필터
      - AssetItem : 개별 내역
        - AssetDate : 개별 내역 일자
    - AssetChart : 월 별 지출 차트 관련 컴포넌트
      - AssetChartBars : 월 별 차트 바(12개)
        - AssetChartBar : 개별 차트 바
<br/>

* UI : 공통 스타일 관련 컴포넌트
  - Font : 폰트 스타일(사이즈, 굵기, 색상 등)
  - Button : 버튼 스타일
<br/>

## ✔️ 목표 기능
* 연도 필터링 기능
  - [x] 연도 필터링 기능 추가
* 연간 자산 현황 관리
  - [x] 자산 합계
  - [x] 수입 합계
  - [x] 지출 합계
* 수입/지출 관리
  - [x] 연간 수입/지출 내역 출력
  - [x] 수입/지출 내역 추가
  - [x] 수입/지출 내역 삭제
* 월 별 지출 차트
  - [x] 월 별 지출 계산
  - [x] 월 별 지출 차트 출력
* 목표 기능 외 추가 기능
  - [x] 로컬스토리지 저장 기능
<br/>
