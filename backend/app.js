const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

require('dotenv').config(); // Levanto el archivo .env

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/admin/login');
const trabajosRouter = require('./routes/admin/trabajos');
const apiRouter = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(session({
    secret: 'cWw6P%4VnvK9*90opQAC',
    cookie: {maxAge:null},
    resave: true,
    saveUninitialized: true
}));

// Genero una función para validar que el usuario esté logueado
const secured = async(req,res,next)=>{
    try{
        if(req.session.usuario){
            next();
        }
        else{
            throw Error('Debes iniciar sesión para continuar.');
        }
    }
    catch(error_msg){
        res.render('admin/login',{
            layout: 'admin/layout',
            error: true,
            message: error_msg
        });
    }
};

app.use('/', indexRouter);
app.use('/admin', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/trabajos', secured, trabajosRouter);
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
