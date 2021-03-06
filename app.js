
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var menu = require('./routes/menu');
var page_A = require('./routes/page_A');
var setting = require('./routes/setting');
var question = require('./routes/question');
var login = require('./routes/login');
var chat = require('./routes/chat');
var pastEntry1 = require('./routes/pastEntry1');
var pastEntry2 = require('./routes/pastEntry2');
var information = require('./routes/information');
var designb = require('./routes/designb');



//  route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/index', index.view);
app.get('/menu', menu.view);
app.get('/page_A', page_A.view);
app.get('/settings', setting.view);
app.get('/question', question.view);
app.get('/login', login.view);
app.get('/chat', chat.addChat);
app.get('/pastEntry1', pastEntry1.view);
app.get('/pastEntry2', pastEntry2.view);
app.get('/information', information.view);
app.get('/designb', designb.view);

app.get('/page_B', page_A.viewMin);

app.post('/addMessage', page_A.addMessage);
app.post('/addQuestion', page_A.addQuestion);
//app.post('/addMessageb', designb.addMessage);
//app.post('/addQuestionb', designb.addQuestion);



// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
