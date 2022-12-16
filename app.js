const expressLayout=require('express-ejs-layouts');
const express=require('express');
const cookieParser = require('cookie-parser');
const routers=require('./route/route');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const session=require('express-session');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(expressLayout);
app.use('/',routers);
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


module.exports=app;