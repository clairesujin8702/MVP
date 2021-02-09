let app = require('./server.js');
let PORT = process.env.PORT || 2000;

app.listen( PORT, ()=>{ console.log(`listening on ${PORT}, visit: http://localhost:${PORT}`); });