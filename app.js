var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
// IMPORTAR RUTAS
var indexRouter = require('./routes/index');
var rutaCliente = require('./routes/clientes');
var rutaCategoria = require('./routes/categorias');
var rutaProductos = require('./routes/productos');
var rutaUsuarios = require('./routes/usuarios');
var rutaVentas = require('./routes/ventas');
var app = express();

//Configurar CORS
app.use(cors(
  [
    {
      origin: "localhost:4200", //servidor que deseas que consuma o (*) en caso que sea acceso libre
      credentials: true,
      
    }
  ]
))



// Conexion  a la base de datos
mongoose.connect('mongodb://localhost:27017/curso', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 500
}, (err, res) => {
  if (err) console.log(err)
  console.log('Conectado a la BD');
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS
app.use('/', indexRouter);
app.use('/clientes', rutaCliente);
app.use('/categorias', rutaCategoria);
app.use('/productos', rutaProductos);
app.use('/usuarios', rutaUsuarios);
app.use('/ventas', rutaVentas);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
