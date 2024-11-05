import express from "express";
import mongoose from 'mongoose';
import Product  from '../models/product.model.js';

const router = express.Router();

router.post("/", async (req, res) => {
    
    const product = req.body;

    if (product.name || product.pricec || product.image) {
        return res.status(412).json({success: false, message: "Please provide all fields."});
    }

    const newProduct = new Product(product)
    try{
    await newProduct.save()
    res.status(201).json({success: true, message: "Product created successfully."});
    } catch(error){
        res.status(500).json({success: false, message: "Error creating product."});
    }

})

router.get("/", async (req, res) => {
    try {
        const products  = await Product.find({});
        res.status(200).json({success: true, products});
    } catch (error) {
        console.log('Error', error.message);
        res.status(500).json({success: false,  message: "Error fetching products."});
    }
})
router.get("/:id", async (req, res) => {
    try {
        const product  = await Product.findById();
        res.status(200).json({success: true, product});
    } catch (error) {
        console.log('Error', error.message);
        res.status(500).json({success: false,  message: "No product founded !"});
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const { product } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false,  message: "Invalid product id."});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,  product, { new: true });

        res.status(200).json({success:true,  message: "Product updated !.",  data: updatedProduct})
    } catch (error) {
        console.log('Error: ',  error.message);
        res.status(404).json({success:false,  message: "Product not found."});
    }
})
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(404).json({success:false,  message: "Product not found."});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,  message: "Product deleted."})
    } catch (error) {
        console.log('Error: ',  error.message);
        res.status(404).json({success:false,  message: "Product not found."});
    }
})

export default router;