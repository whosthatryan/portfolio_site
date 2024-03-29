require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
    console.log('Connection made!');
  });

// const Product = require('./models/products.js');

app.set('view engine', 'jsx');
app.use(express.urlencoded({extended:true}));
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

const indexController = require('./controllers/audio_video.js');
app.use('/', indexController);

app.listen(PORT, () => {
    console.log('ayyy im workin heeyaahhhh')
});

