# My Pocket
> React 연습을 위한 가계부 프로젝트입니다.<br/>
> 선택한 연도 별도 별로 수입/지출 내용을 확인할 수 있고, 월별 지출 차트를 통해 해당 연도의 월별 지출 현황을 확인할 수 있습니다.
<br/>

## 🎨 디자인 시안
> 작성 일자 : 2022-08-02<br/>
> 사용 툴 : Figma
<p align="center">
  <img src="https://user-images.githubusercontent.com/105365737/182502085-94af2cf7-95ab-4ff2-912b-f2f92c70f7c0.png" />
</p>
<br/>

## 🌲 컴포넌트 구조
![다운로드 (1)](https://user-images.githubusercontent.com/105365737/182518489-f8f20988-2344-4d8a-9ce6-826cbc907d65.png)
* NewAsset : 수입/지출 내역 추가 관련 컴포넌트
  - NewAssetForm : 수입/지출 내역 추가 폼
<br/>

* Asset : 수입/지출 내역 조회 관련 컴포넌트
  - AssetStatus : 자산 현황 관련 컴포넌트
  - AssetItems : 연간 수입/지출 내역 관련 컴포넌트
    - AssetItem : 각 내역
    - AssetItemsFilter : 연도 필터
  - AssetChart : 월 별 지출 차트 관련 컴포넌트
    - AssetChartBar : 차트 바
<br/>

* UI : 공통 스타일 관련 컴포넌트
  - Font : 폰트 스타일(사이즈, 굵기, 색상 등)
  - Button : 버튼 스타일

<br/>

## ✔️ 목표 기능
* 연도 필터링 기능
  - [ ] 연도 필터링 기능 추가
* 연간 자산 현황 관리
  - [ ] 자산 합계
  - [ ] 수입 합계
  - [ ] 지출 합계
* 수입/지출 관리
  - [ ] 연간 수입/지출 내역 출력
  - [ ] 수입/지출 내역 추가
  - [ ] 수입/지출 내역 삭제
* 월 별 지출 차트
  - [ ] 월 별 지출 계산
  - [ ] 월 별 지출 차트 출력
