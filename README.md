## Vanila Javascript로 SPA 만들기

### node express 사용

> 구현한 부분

- 제공되어지는 JSON을 이용하여 express를 이용하여 api router 생성해 res.json()으로 data를 불러옴
- router를 이용하여 새로고침 없이 페이지 이동
- /path 값을 만들어서 window.history.pushState로 path 뒤에 값을 추가
- path값을 가져와 id를 이용해서 render함수를 호출해 새로고침 없이 페이지를 생성
- 이벤트 위임을 사용하여 nav에 이벤트를 걸어 api를 호출하도록 진행

* '/'로 이동할때, 메인페이지에서 button으로 클릭시에만 새로고침 발생. navigation에서 이동할때는 새로고침 발생안하는 spa방식 이용

* 반응형으로 UI 생성

- npm run start > local host: 3000에서 작동
### Main Page

> 실시간 차트를 보여주고 ,  top 12개를 보여준다
 
<img src = "https://user-images.githubusercontent.com/62421526/120884105-e72f8580-c61b-11eb-91b7-3b10f0168b5f.PNG" alt="img_website1">
<img src = "https://user-images.githubusercontent.com/62421526/120884107-e72f8580-c61b-11eb-84b1-5e6c2c75bb4f.PNG" alt="img_website1">
<img src = "https://user-images.githubusercontent.com/62421526/120884108-e7c81c00-c61b-11eb-8c47-641907172ad9.PNG" alt="img_website1">

### Sub Page

> 메뉴 subpage를 보여준다

<img src = "https://user-images.githubusercontent.com/62421526/120884110-e860b280-c61b-11eb-8038-ddba58af320f.PNG" alt="img_website1">
<img src = "https://user-images.githubusercontent.com/62421526/120884111-e860b280-c61b-11eb-8a7f-ef9bfc7a7cc0.PNG" alt="img_website1">
<img src = "https://user-images.githubusercontent.com/62421526/120884112-e8f94900-c61b-11eb-8b9f-57b5077a84f3.PNG" alt="img_website1">
<img src = "https://user-images.githubusercontent.com/62421526/120884113-e8f94900-c61b-11eb-8257-5a9445458eb5.PNG" alt="img_website1">

### 반응형

> 반응형으로 사이트 크기에 따라 다시 변동시킨다

<img src = "https://user-images.githubusercontent.com/62421526/120884102-e565c200-c61b-11eb-9ce2-8772b450ed1a.PNG" alt="img_website1">
