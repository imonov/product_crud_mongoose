import { Product } from "../model/product.model.js";

export async function getAllProduct(req, res) {
    const products = await Product.find();

    if (products.length === 0) {
        return res.status(200).json({
            status: 200,
            message: "Data not found",
        });
    }

    res.status(200).json({
        status: 200,
        data: products,
    });
}

export async function createProduct(req, res) {
    const { name, description, price, quantity, rating, manufacture_year } =
        req.body;

    const product = new Product({
        name,
        description,
        price,
        quantity,
        rating,
        manufacture_year,
    });

    await product.save();

    res.status(201).json({
        status: 201,
        message: "product yaratildi",
    });
}
