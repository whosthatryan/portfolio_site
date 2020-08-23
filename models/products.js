const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema (
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        art: { type: String, required: false },
        audio: { type: String, required: true },
        video: { type: String, required: false },
        isForSale: { type: Boolean, required: true, }
    },
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
