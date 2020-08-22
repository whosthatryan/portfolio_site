const express = require('express');
const router = express.Router();
const Product = require('../models/products.js');

//INDEX PAGE
router.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('views/Index2', {
            product: allProducts
        });
    });
});

//NEW
router.get('/wholeheartedly/new', (req, res)=>{
    res.render('views/New');
});

//DELETE
router.delete('/wholeheartedly/:id', (req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, (error, deletedProduct) => {
        if (deletedProduct) {
        console.log('deletedProduct');
        } else {
            console.log(error);
        }
        res.redirect('/wholeheartedly');
    });
});

//UPDATE
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, {...req.body}, (error, updatedProduct) => {  
        if (updatedProduct) {
                console.log(updatedProduct); 
            } else {
                console.log(error);
            };
    });
});

//CREATE
router.post('/', (req, res)=>{
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
router.get('/:id/edit', (req, res) => {
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
router.get('/:id', (req, res)=>{
    Product.findById(req.params.index, (err, foundProduct)=>{
        res.render('Show', {
            product: foundProduct
        });
    });
});

module.exports = router;