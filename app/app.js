const Express = require('express');
const bodyParser = require('body-parser');
const app = new Express();
const router = require('./routes');
const MongoClient = require('mongodb').MongoClient;

const DBhost = 'mongodb://localhost:27017';

app.use(bodyParser.json());

app.startTheApp = (port = 4000, DBname = 'sandbox') => {
    const DBurl = `${DBhost}/${DBname}`;
    MongoClient.connect(DBurl, (err, db) => {
        app.use('/api', router(db));
        app.serverObj = app.listen(port, () => {
            
            console.log(`App listening on ${port}.`);
            app.emit("appStarted");
        });
    });
}

module.exports = app;