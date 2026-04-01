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

export async function updateProduct(req, res) {
    const { id } = req.params;

    const { name, description, price, quantity, rating, manufacture_year } =
        req.body;

    const updatedData = {};

    if (name) updatedData.name = name;
    if (description) updatedData.description = description;
    if (price) updatedData.price = price;
    if (quantity) updatedData.quantity = quantity;
    if (rating) updatedData.rating = rating;
    if (manufacture_year) updatedData.manufacture_year = manufacture_year;

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidadors: true,
    });

    if (!updatedProduct) {
        res.status(404).json({
            status: 201,
            message: "mahsulot topilmadi",
        });
    }

    res.status(200).json({
        status: 200,
        message: "mahsulot yangilandi",
        data: updatedProduct,
    });
}
