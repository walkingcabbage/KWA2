# KWA(한국 폐기물 협회)
접근성, 디자인, 반응형 등이 아쉬웠던 [한국폐기물협회](http://www.kwaste.or.kr/)의 리뉴얼 프로젝트를 진행 하였다.  
## Renewal Link
[바로가기](https://kwa-walkingcabbage.koyeb.app/)
## Color & Font
![3kwacolor](https://user-images.githubusercontent.com/70689018/229979779-bb277c93-70f7-4fde-9f7a-ccb547cef2ec.png)
## Details
### Header
#### 기존 Header
![image](https://user-images.githubusercontent.com/70689018/229980125-d9fb3192-a835-4f35-8e64-f1162873314e.png)
다소 난잡해보일 수 있는 Header, 반응형을 고려하지 않아 PC버전에서만 작동된다.  
#### 리뉴얼 후의 Header
##### Main
![header](https://user-images.githubusercontent.com/70689018/229982452-3cf70d5c-cc6b-49eb-bc6f-9bf547068981.gif)
##### Sub
![image](https://user-images.githubusercontent.com/70689018/229980637-3f849a57-581b-4e1b-b351-cc99733fdca3.png)

> 햄버거바를 사용하여 UI에 간소화를 주었다. 
### Main Page
* 가장 위의 구름 배경이 스크롤 함에 따라 이동하는 속도를 조절하여 동적인 효과를 주었다.  
* 이미지와 설명을 그리드에 맞춰 배치하며 디자인에 깔끔함을 주었다.  
* 공지사항 데이터베이스를 연결하여 Swiper.js로 나열하였다.  
### Sub Page
1. 로그인 & 회원가입
    * 로그인 : 로그인 기능 미구현
    * 회원가입 : 정규식을 기반으로 정보가 적합한지 check, User 데이터베이스에 정보를 추가  
3. 협회소개 / 인삿말 : 업체 소개 페이지
4. 회원정보 / 회원현황 : 썸네일 기반의 리스트
5. 자원순환정보 / 공지사항 : 리스트
6. Navigation Bar 
    * EJS & Express.js 기반으로 router에서 category 데이터를 받아 nav가 변경되도록 설정하였다. 
```js
router.get('/notice', (req, res) => {  
  db.getNotice((rows) => {  
    res.render('noticeList', {  
      'headerSW': true,  
      'footerSW': true,  
      'subH': true,  
      'category': 'notice',  //카테고리에 따라 안에 데이터가 변경 된다. 
      'rows': rows  
    });  
  });  
})
```
