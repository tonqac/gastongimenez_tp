var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); // Levanto el archivo .env

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var trabajosRouter = require('./routes/admin/trabajos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'cWw6P%4VnvK9*90opQAC',
    cookie: {maxAge:null},
    resave: true,
    saveUninitialized: true
}));

// Genero una función para validar que el usuario esté logueado
const secured = async(req,res,next)=>{
    try{
        /*
        if(req.session.id_usuario){
            next();
        }
        else{
            res.render('admin/login',{
                layout: 'admin/layout',
                error: true,
                message: 'Debes iniciar sesión para continuar.'
            });
        }
        */
       next(); /***TODO: Quitar después de las pruebas */
    }
    catch(error){
        console.log(error);
    }
};

app.use('/', indexRouter);
app.use('/admin', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/trabajos', secured, trabajosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
