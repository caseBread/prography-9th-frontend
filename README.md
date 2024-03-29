# Prography 9th Frontend 사전과제

## 로컬 실행 방법
   
```
git clone https://github.com/caseBread/prography-9th-frontend.git
cd prography-9th-frontend
nvm install
npm install
npm start
```
(nvm이 설치되어있지 않으시다면, node : v18.16.1 / npm v9.5.1 으로 세팅 후 아래 명령어를 부탁드립니다.)

```
git clone https://github.com/caseBread/prography-9th-frontend.git
cd prography-9th-frontend
npm install
npm start
```

## 구현 스펙

- React
- Typescript
- Zustand
- @tanstack/react-query
- styled-components

## 구현 목록

1. 전체 카테고리 조회 API를 호출해 카테고리 리스트(strCategory)를 노출합니다. ✅

2. 카테고리를 클릭 시, 카테고리별 음식 조회 API를 호출해 해당하는 카테고리의 음식 목록을 보여줍니다. ✅

3. 선택한 카테고리와 선택하지 않은 카테고리의 스타일을 구분해주세요. (디자인은 자유롭게) ✅

4. 카테고리는 **복수** **선택**이 가능하며, 클릭한 **모든 카테고리**에 대한 음식을 보여줍니다. 선택된 카테고리를 다시 클릭 시, 해당 카테고리에 대한 음식은 제외되어야 합니다. ✅

5. 카드의 갯수가 20개 초과 시 인피니트 스크롤을 통해 데이터를 추가적으로 보여줍니다. 이때, 음식 목록에 대한 정보는 프론트 단에 저장하고 있습니다. ✅

6. 각각의 썸네일 이미지는 lazy loading이 되어야 합니다. ✅

7. 음식 목록에 대한 결과를 사용자가 지정한 레이아웃을 통해 보여줍니다.

   - PC 버전: 2개씩 보기 / 4개씩 보기 ✅
   - Mobile 버전: 하나의 행에 한 개의 카드만 보여줍니다. ✅

8. 음식에 대한 결과를 필터링 할 수 있습니다.

   - 필터링 기준 : 최신순, 알파벳 오름차순, 알파벳 내림차순 ✅

9. 쿼리스트링

   - **필터링** 시 url 쿼리스트링에 `filter=new / asc / desc` **쿼리스트링**을 저장합니다. ✅
   - **카테고리 선택** 시 url 쿼리스트링에 `category=선택된 카테고리 값` **쿼리스트링**을 저장합니다. (복수 선택 시 쉼표(`,`)로 구분) ✅
   - 사용자가 `?category=chicken,Seafood&filter=asc` 로 페이지 진입 시, chicken과 seafood에 해당하는 음식을 볼 수 있어야 합니다. 이 때 **필터값**도 동일해야 합니다. ✅

10. 이 외에 ux적으로 필요한 기능이 있으면 자유롭게 추가해주세요 - 넵!
