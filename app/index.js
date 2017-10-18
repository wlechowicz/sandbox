const Express = require('express');
const app = new Express();
const routes = require('./routes');

const port = 4000;

app.use('/api', routes);

app.listen(port);

console.log(`App listening on ${port}.`);