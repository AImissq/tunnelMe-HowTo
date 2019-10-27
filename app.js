var express = require("express");


var app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
app.get('/', function(req, res) {

    res.render('index.html');
});


app.listen(8080);
console.log('Express server started on port 8080');
