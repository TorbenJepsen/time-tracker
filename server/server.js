var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var entryRouter = require('./routes/entry');
var projectRouter = require('./routes/project');

var port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/entry', entryRouter);

app.use('/project', projectRouter);

app.listen(port, function(){
    console.log('listening on port', port);  
});