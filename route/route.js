//필요한 모듈
const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('./../db.js');
const FileSystem = require('fs');
const path = require('path');

//파일 업로드를 위하여
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }),
  limits: {
    fileSize: 1024 * 1024 * 2
  }
})

//메인페이지
router.get('/', function (req, res) {
  // res.render('index', {
  //   'headerSW': true,
  //   'footerSW': true,
  //   'subH': false,
  // });

  db.getNotice10((rows) => {
    res.render('index', {
      'headerSW': true,
      'footerSW': true,
      'subH': false,
      'rows': rows
    });
  });
})

//회원가입 
router.get('/join', (req, res) => {
  res.render('join', {
    'headerSW': false,
    'footerSW': false,
    'subH': false,
  });
})

//로그인
router.get('/login', (req, res) => {
  res.render('login', {
    'headerSW': false,
    'footerSW': false,
    'subH': false,
  });
})

//로그인
router.post('/login', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  res.render('login', {
    'headerSW': false,
    'footerSW': false,
    'subH': false,
    'userData': param
  });
})
//회원가입 프로세스
router.post('/joinProcess', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  console.log(param);
  const userId = param.userId;
  const userPw = param.userPw;
  const userEmail = param.userEmail;
  const userName = param.userName;
  const userNum = param.userNum;

  db.insertUser(userId, userPw, userEmail, userName, userNum, () => {
    res.render('login', {
      'headerSW': false,
      'footerSW': false,
      'subH': false,
      'userData': param
    });
  })
})
//공지사항 리스트
router.get('/notice', (req, res) => {
  db.getNotice((rows) => {
    res.render('noticeList', {
      'headerSW': true,
      'footerSW': true,
      'subH': true,
      'category': 'notice',
      'rows': rows
    });
  });
})

//공지사항 작성 페이지
router.get('/writeNoticePage', (req, res) => {
  res.render('noticeWrite', {
    'headerSW': true,
    'footerSW': true,
    'subH': true,
    'category': 'notice',
  });
})

//공지사항 읽기
router.get('/readNotice', (req, res) => {
  let id = req.query.id;
  db.incrNoticeView(id, () => {
    db.getNoticeByid(id, (rows) => {
      res.render('noticeRead', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'notice',
        'row': rows[0],
      });
    })
  })
})

//공지사항 작성 프로세스
router.post('/writeNotice', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  console.log(param);
  const title = param.title;
  const category = param.category;
  const content = param.content;

  db.insertNotice(title, content, category, () => {
    res.redirect('notice');
  })
})

//회원가입 축하 페이지
router.get('/intro', (req, res) => {
  res.render('intro', {
    'headerSW': true,
    'footerSW': true,
    'subH': true,
    'category': 'intro',
  });
})

//공지사항 수정 페이지
router.get('/updateNotice', (req, res) => {
  const id = req.query.id;
  db.getNoticeByid(id, (rows) => {
    res.render('noticeUpdate', {
      'headerSW': true,
      'footerSW': true,
      'subH': true,
      'category': 'notice',
      'row': rows[0],
    });
  })
})

//공지사항 수정 프로세스
router.post('/updates', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const id = param.id;
  const title = param.title;
  const category = param.category;
  const content = param.content;
  db.updateNotice(id, title, content, category, () => {
    db.getNotice((rows) => {
      res.render('noticeList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'notice',
        'rows': rows,
      })
    })
  })
})
//공지사항 삭제 프로세스
router.get('/deleteNotice', (req, res) => {
  let id = req.query.id;
  db.deleteNoticeByid(id, () => {
    db.getNotice((rows) => {
      res.render('noticeList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'notice',
        'rows': rows,
      })
    })
  })
})
//회원현황 페이지
router.get('/kwauser', (req, res) => {

  let sc = (!req.query.Scategory) ? 'A' : req.query.Scategory;
  if (sc == 'A') {
    db.getKWAUserA((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'A',
        'rows': rows
      });
    });
  } else if (sc == 'B') {
    db.getKWAUserB((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'B',
        'rows': rows
      });
    });
  } else if (sc == 'C') {
    db.getKWAUserC((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'C',
        'rows': rows
      });
    });
  } else if (sc == 'D') {
    db.getKWAUserD((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'D',
        'rows': rows
      });
    });
  } else if (sc == 'E') {
    db.getKWAUserE((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'E',
        'rows': rows
      });
    });
  } else if (sc == 'F') {
    db.getKWAUserF((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'F',
        'rows': rows
      });
    });
  } else if (sc == 'G') {
    db.getKWAUserG((rows) => {
      res.render('KWAUserList', {
        'headerSW': true,
        'footerSW': true,
        'subH': true,
        'category': 'KWAUser',
        'subcategory': 'G',
        'rows': rows
      });
    });
  }
})

//회원현황 작성 페이지
router.get('/writeUserPage', (req, res) => {
  res.render('KWAUserWrite', {
    'headerSW': true,
    'footerSW': true,
    'subH': true,
    'category': 'KWAUser',
  });
})
//회원현황 작성 프로세스
router.post('/writeUser', upload.single('img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let name = param.name;
  let address = param.addr;
  let tel = param.tel;
  let fax = param.fax;
  let link = param.link;
  let category = param.category;
  db.insertKWAUser(name, address, tel, fax, link, category, img, () => {
    res.redirect('/kwauser');
  })
})
// href="/deletenotice?id=<%= row.id %>"




//서브페이지
// router.get('/sub1', (req, res) => {
//   // res.render('sub1');
//   db.getMemo((rows) => {
//     res.render('sub1', {
//       rows: rows
//     });
//   });
// });

module.exports = router;