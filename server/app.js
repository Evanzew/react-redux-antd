import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import api from './routes/routes';
import csrf from 'csurf';

if (process.env.NODE_ENV != 'production') {
  var webpack = require('webpack');
  var config = require('../webpack.config/web.dev.config');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var compiler = webpack(config);
}

let app = express();

// view engine setup
let viewPath =
  process.env.NODE_ENV == 'production'
    ? path.join(__dirname)
    : path.join(__dirname, '../dist');
app.set('views', viewPath);
app.set('view engine', 'ejs');
app.engine('.ejs', ejs.__express);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('node react'));
app.use(
  cookieSession({
    name: 'session',
    keys: ['node react']
  })
);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

if (process.env.NODE_ENV != 'production') {
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      stats: {
        colors: true
      }
    })
  );
  // enable hot-reload and state-preserving
  // compilation error display
  app.use(webpackHotMiddleware(compiler));
}

let csrfProtection = csrf({
  cookie: {
    httpOnly: true
  }
});

app.use('/api', csrfProtection, api);

//????
app.get('*', csrfProtection, function(req, res) {
  res.render('index', { title: 'Express', csrfToken: req.csrfToken() });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

export default app;
