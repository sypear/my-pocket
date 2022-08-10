# My Pocket
![13](https://user-images.githubusercontent.com/105365737/183795715-ecfe80ef-1ecf-412b-adcb-0eead707a7e3.gif)
> React 연습을 위해 진행한 가계부 프로젝트입니다.<br/>
> 선택한 연도 별로 수입/지출 내역을 확인할 수 있고, 월별 지출 차트를 확인할 수 있습니다.<br/><br/>
> Velog 포스팅 보러가기 : <a href="https://velog.io/@sypear/React-%EA%B0%80%EA%B3%84%EB%B6%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-My-Pocket">[React] 가계부 프로젝트 | My Pocket</a><br/>
> 데모 페이지 : https://sypear.github.io/my-pocket/ (반응형 디자인 미적용) <br/>
<br/>

## 💻 프로젝트 실행 방법
프로젝트 폴더 안에서 아래 명령어를 실행합니다.
> npm i <br/>
> npm start
<br/>

## 💪 프로젝트 목적
* React에 익숙해지자
  - 직접 컴포넌트 구조 생각해보기
    - <a href="https://ko.reactjs.org/docs/faq-structure.html">React 도큐먼트</a>를 참고해서 기능에 따라 분류하는 방식으로 접근했습니다 😀
  - 컴포넌트들을 결합해서 UI 구현하기
  - state를 이용해서 동적인 화면 만들기
  - 사용자 이벤트 발생 시 state 업데이트 하기
  - props를 이용해 부모 → 자식 컴포넌트로 데이터 전달하기
  - state 끌어올리기를 이용해 자식 → 부모 컴포넌트로 데이터 전달하기(부모 컴포넌트로부터 전달받은 함수에 데이터를 보내는 방식)
<br/>

## 🗓️ 프로젝트 일정
> 기획 및 디자인 : 2022-08-02<br/>
> 퍼블리싱 : 2022-08-02 ~ 2022-08-03<br/>
> 기능 구현 : 2022-08-03 ~ 2022-08-04<br/>
> 코드 리팩토링 및 버그 픽스 : 2022-08-05 ~ 2022-08-06
<br/>

## 🎨 디자인 시안
> 사용 툴 : Figma

![Untitled-1 co3py](https://user-images.githubusercontent.com/105365737/182871461-74de069d-510d-46a1-8107-070b88c55243.png)

<br/>

## 🌲 컴포넌트 구조
### 1. 컴포넌트 트리
![진짜최종트리](https://user-images.githubusercontent.com/105365737/183232633-85c5f270-37fe-4448-997f-b20d29b3cbeb.png)

<br/><br/>

### 2. 디자인 시안을 기반으로 한 컴포넌트 구조
![진짜제발최종시안](https://user-images.githubusercontent.com/105365737/183232629-26b7078c-9e81-4ccc-8025-8f03f3b3ee7b.png)

<br/><br/>

### 3. 컴포넌트 설명
* Chart : 차트 컴포넌트
  - ChartBar : 개별 차트 바
* DateLabel : 날짜를 yyyy-mm-dd 형태로 출력하는 컴포넌트
* Filter : 연도 별 필터 컴포넌트
* Item : 개별 아이템 컴포넌트
* NewItemContainer : 내역 추가 관련 컴포넌트
  - NewItem : 내역 추가 영역
    - NewItemForm : 내역 추가 폼
* PocketContainer : 자산 현황, 연간 내역, 월 별 지출 차트 관련 컴포넌트
  - PocketStatus : 자산 현황
  - PocketList : 연간 내역
    - PocketItems : 개별 내역
  - PocketChart : 월 별 지출 차트
<br/>

## ✅ 구현 기능
* 필터링 기능
  - [x] 연도별 내역 필터링 기능 추가
* 자산 현황 관리
  - [x] 자산 합계
  - [x] 수입 합계
  - [x] 지출 합계
* 내역 관리
  - [x] 연간 내역 출력
    - [x] 내역 출력 시 정렬 적용 (최근 날짜 기준 정렬, 날짜가 같은 경우 최신순 정렬)
  - [x] 내역 추가
    - [x] 내역 추가 시 내역 년도에 맞게 필터 자동 설정
  - [x] 내역 삭제
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

## 🔫 트러블슈팅
### 왜 setState만 하면 무한루프에 빠지는거야?
#### - 오류 발생 상황
```javascript
import React, { useState } from "react";
import { addComma } from "../../utils/numberUtils";
import "./PocketStatus.css";

const PocketStatus = (props) => {
    const [totalBalance, setTotalBalance] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    let total = {balance: 0, income: 0, expense: 0};

    if (props.filteredItems.length > 0) {
        // 자산, 수입, 지출 합계 계산
        props.filteredItems.forEach(item => {
            if (item.amountType === "income") {
                total.balance += +item.amount;
                total.income += +item.amount;
            } else {
                total.balance -= +item.amount;
                total.expense += +item.amount;
            }
        });

    setTotalBalance(total.balance);
    setTotalIncome(total.income);
    setTotalExpense(total.expense);

    return (
        // JSX 코드 생략
    );
};

export default PocketStatus;
};

export default AssetStatus;
```
자산, 수입, 지출 합계를 계산한 후 `setState()`를 사용해서 업데이트를 하려고 하면<br/>
`Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.` 에러가 발생했습니다.<br/>
console.log()로 찍어보면 멀쩡하게 잘 찍혔는데, state를 업데이트 하려고만 하면 무한루프에 빠져버렸습니다.

<br/>

#### - 오류 이유 찾기
<a href="https://stackoverflow.com/questions/65941392/why-does-setstate-cause-my-react-app-go-into-infinite-loop">Why does setState cause my React app go into infinite loop?</a> 글을 보고 추측한 오류 발생 이유는 아래와 같습니다.<br/>
> 화면 렌더링 시 `props.filteredItems` 값 변경<br/>
> → `setTotalBalance()`, `setTotalIncome()`, `setTotalExpense()`를 이용하여 상태를 재설정<br/>
> → 상태를 재설정했기 때문에 재렌더링<br/>
> → 렌더링이 됐으니까 `props.filteredItems` 값 변경<br/>
> → `setTotalBalance()`, `setTotalIncome()`, `setTotalExpense()`을 이용하여 상태를 재설정<br/>
> → ... 이런 과정으로 무한 반복

<br/>

#### - 오류 해결하기
<a href="https://stackoverflow.com/questions/59112809/react-usestate-hook-causing-infinite-loop">React UseState hook causing infinite loop</a> 글을 참고하여 `props` 변경 사항이 있는 경우에만 상태를 업데이트 하는 방식으로 코드를 수정했습니다.<br/>
```javascript
import React, { useEffect, useState } from "react";
import { addComma } from "../../utils/numberUtils";
import "./PocketStatus.css";

const PocketStatus = (props) => {
    const [totalBalance, setTotalBalance] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const twoDigitYear = props.filterBaseYear.slice(-2);

    useEffect(() => {
        let total = {balance: 0, income: 0, expense: 0};

        if (props.filteredItems.length > 0) {
            // 자산, 수입, 지출 합계 계산
            props.filteredItems.forEach(item => {
                if (item.amountType === "income") {
                    total.balance += +item.amount;
                    total.income += +item.amount;
                } else {
                    total.balance -= +item.amount;
                    total.expense += +item.amount;
                }
            });
        }

        setTotalBalance(total.balance);
        setTotalIncome(total.income);
        setTotalExpense(total.expense);
    }, [props.filteredItems]);

    return (
        // JSX 코드 수정
    );
};

export default PocketStatus;
```

useEffect를 이용해서 props.filteredItems이 변할 때만 상태를 업데이트 하도록 하니 쓸데없는 재렌더링이 일어나지 않아 무한 루프 발생 문제가 해결되었습니다.

<br/>

## 🌈 느낀 점
### 생각을 먼저 한 후 기능을 구현하자
이번 프로젝트를 진행하면서 컴포넌트 구조를 제대로 생각하지 않고 바로 기능 구현에 들어갔는데요, 이런 점 때문에 시간을 많이 허비했습니다..<br/><br/>

#### 첫 번째 삽질
![cat-typing-furiously](https://user-images.githubusercontent.com/105365737/183237003-52078e09-75bd-4173-bbd4-5042b44310ba.gif)
<br/>
(내역 입력, 자산 현황, 연간 내역, 월 별 지출 차트 이렇게 4개로만 분리하면 되겠넹~~~ 이라고 생각하며 구현을 시작한 내 모습)<br/><br/>

실제로 구현을 하다보니 차트, 아이템, 날짜 출력 Label 같은 경우는 재사용이 가능한 컴포넌트라고 판단되어서 따로 분리하고..<br/>
연간 내역 컴포넌트 안에서도 내역 리스트로 더 분리할 수 있었고..<br/><br/>

물론 구현을 하면서 분리할 수 있는 부분이 보이면 추가 분리하는 게 맞다고는 하지만,<br/>
대략적으로 큰 그림을 그리고 시작하지 않고 바로 구현에 들어가서 컴포넌트를 분리했다가 다시 합쳤다가 또 분리했다가 하는.. 굳이 하지 않아도 될 시간 낭비(삽질)를 아주 많이 했습니다.<br/><br/>

다음 프로젝트를 진행할 때에는 이번처럼 바로 코드를 짜기보다는<br/>
대략적으로 큰 그림을 그린 후 기능 구현을 해야겠다는 교훈을 얻었습니다.<br/><br/>

#### 두 번째 삽질
8월 4일 기능 구현을 마무리하고 친구에게 Repository를 공유했는데, 아래와 같은 피드백을 받았습니다.
<br/>

<img src="https://user-images.githubusercontent.com/105365737/183237615-15002bc0-f773-46a2-9b9f-4b5c086bceb3.jpg" width="400">

<br/>

React에서 이미지, font등을 저장하는 폴더 명을 주로 assets으로 사용한다는 걸 모른 채로 내역 추가 컴포넌트명을 NewAsset, 자산 관련 컴포넌트명을 Asset이라고 지었었고.. (아래 이미지 참조)
![원래2](https://user-images.githubusercontent.com/105365737/183238143-a9c339dc-7236-42f2-8cb7-e4e1c3d8a6f8.png)

<br/>

이로 인해 asset이 들어가는 컴포넌트명, 함수명, 변수명을 전부 변경하느라 정말 힘들었습니다. (discard를 엄청 했습니다😂) <br/>
조금이라도 더 찾아보고 더 생각해봤다면 이런 일은 없었을텐데.. 이 날의 삽질을 바탕으로 앞으론 이러지 말자고 다짐하게 됐습니다.
