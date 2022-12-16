let app = require('../app');

let port=process.env.PORT||3004;

app.listen(port,()=>{
  console.log(`http://127.0.0.1:${port} 로 express 실행`);
})