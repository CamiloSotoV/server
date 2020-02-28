const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes');

//Conexión a la base de datos MongoDB
mongoose.Promise = global.Promise;
// const dbUrl = 'mongodb://localhost:27017/sistema';
const dbUrl = 'mongodb+srv://olimpusmac:1014299767Casv@sorteos-yly5t.mongodb.net/Sistema_back?retryWrites=true&w=majority';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
    .then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
    .catch(err => console.log(err));


const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router);
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
}); 