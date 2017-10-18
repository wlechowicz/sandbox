const Express = require('express');
const bodyParser = require('body-parser')
const app = new Express();
const router = require('./routes');
const MongoClient = require('mongodb').MongoClient;

const port = 4000;
const DBurl = 'mongodb://localhost:27017/sandbox';

app.use(bodyParser.json());

MongoClient.connect(DBurl, (err, db) => {
    app.use('/api', router(db));
    app.listen(port);
    console.log(`App listening on ${port}.`);
});