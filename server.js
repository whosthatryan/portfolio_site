const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://RyanM:thisismypasswordlol@cluster0.3ilz8.azure.mongodb.net/wholeheartedly?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
    console.log('Connection made!');
  });

const Product = require('./models/products.js');

app.set('view engine', 'jsx');
app.use(express.urlencoded({extended:true}));
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

//INDEX PAGE
app.get('/wholeheartedly', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', {
            product: allProducts
        });
    });
});

//NEW
app.get('/wholeheartedly/new', (req, res)=>{
    res.render('New');
});

//DELETE
app.delete('/wholeheartedly/:id', (req, res) => {
    Product.remove({_id: req.params.id}, (error, deletedProduct) => {
        if (deletedProduct) {
        console.log('deletedProduct');
        } else {
            console.log(error);
        }
        res.redirect('/wholeheartedly');
    });
});

//UPDATE
app.put('/wholeheartedly/:id', (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, {...req.body}, (error, updatedProduct) => {  
        if (updatedProduct) {
                console.log(updatedProduct); 
            } else {
                console.log(error);
            };
    });
});

//CREATE
app.post('/wholeheartedly/', (req, res)=>{
    // const productPrice = parseInt(req.body.price);
    if (req.body.isForSale === 'on') {
        req.body.isForSale = true;
    } else {
        req.body.isForSale = false;
    };
    // res.send(req.body);
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.description);
    console.log(req.body.img);
    console.log(req.body.price);
    Product.create(req.body, (error, createdProduct) => {
        if (createdProduct) {
            res.redirect('/wholeheartedly')
        } else {
            console.log(error, 'thats the problem')
        };
    });
});

//EDIT
app.get('/wholeheartedly/:id/edit', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        if (foundProduct) {
            console.log(foundProduct)
            res.render('Edit', {product: foundProduct});
        } else {
            console.log(error);
        }
        res.redirect('./wholeheartedly');
    });
});

//SHOW PAGE
app.get('/wholeheartedly/:index', (req, res)=>{
    Product.findById(req.params.index, (err, foundProduct)=>{
        res.render('Show', {
            product: foundProduct
        });
    });
});

app.listen(PORT, () => {
    console.log('ayyy im workin heeyaahhhh')
});

