import mongoose from "mongoose";
import  Mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    }

},{
    timestamps: true //createdAt and uupdatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;

