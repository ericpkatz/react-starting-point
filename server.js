const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
const db = require('./db')
const seed = require('./db/seed')
const api = require('./api')


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', api)

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

db.sync()
.then(seed)
.then( () => {

  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  });

})
