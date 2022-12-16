var mysql = require('mysql');
var moment = require('moment');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kwa',
  dateStrings: 'date',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected!');
})

// start

function insertUser(userId, userPw, userEmail, userName, userNum, callback) {
  connection.query(`INSERT INTO userinfo(userId,userPw,userEmail,userName,userNum) VALUES
   ('${userId}','${userPw}','${userEmail}','${userName}','${userNum}')`, (err) => {
    if (err) throw err;
    callback();
  })
}

function checkUser(userId,callback){
  connection.query(`SELECT userId,userPw from userinfo WHERE userId='${userId}' `,(err)=>{
    if(err) throw err;
    callback();
  })
}

function getNotice(callback) {
  connection.query('SELECT * FROM notice ORDER BY id desc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};

function getNotice10(callback) {
  connection.query('SELECT * FROM notice ORDER BY id desc LIMIT 10;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};

function incrNoticeView(id, callback) {
  connection.query(`UPDATE notice SET views = views + 1 WHERE id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    })
}

function getNoticeByid(id, callback) {
  connection.query(`select * from notice where id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    }
  )
}

function insertNotice(title, content, category, callback) {
  connection.query(`INSERT INTO notice(title,category,views,create_time,content) VALUES ('${title}','${category}',0,NOW(),'${content}')`, (err) => {
    if (err) throw err;
    callback();
  })
}

function updateNotice(id, title, content, category, callback) {
  connection.query(`UPDATE notice SET title='${title}',content='${content}',
  category='${category}',create_time=NOW() WHERE id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  })
}

function deleteNoticeByid(id, callback) {
  connection.query(`delete from notice where id=${id}`, (err => {
    if (err) throw err;
    callback();
  }))
}

function getKWAUserA(callback) {
  connection.query('SELECT * FROM kwauser ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserB(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="특·광역시도" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserC(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="시·군·구" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserD(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="기관회원" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserE(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="단체회원" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserF(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="기업회원" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function getKWAUserG(callback) {
  connection.query('SELECT * FROM kwauser WHERE category="특별회원" ORDER BY id asc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};

function insertKWAUser(name,address,tel,fax,link,category,img, callback) {
  connection.query(`INSERT INTO kwauser(name,address,tel,fax,link,category,img) values
   ('${name}','${address}','${tel}','${fax}','${link}','${category}','${img}')`, (err) => {
    if (err) throw err;
    callback();
  })
}
module.exports = {
  insertUser,
  checkUser,
  getNotice,
  getNotice10,
  insertNotice,
  getNoticeByid,
  incrNoticeView,
  updateNotice,
  deleteNoticeByid,
  getKWAUserA,
  getKWAUserB,
  getKWAUserC,
  getKWAUserD,
  getKWAUserE,
  getKWAUserF,
  getKWAUserG,
  insertKWAUser,
};