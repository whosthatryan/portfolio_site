const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: false },
        price: { type: Number, required: true },
        isForSale: { type: Boolean, required: true, }
    },
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
