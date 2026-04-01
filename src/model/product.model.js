import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            minLength: [3, "Kamida 3 ta belgi kiriting"],
        },
        description: {
            type: mongoose.SchemaTypes.String,
            minLength: [16, "Kamida 16 ta belgi kiriting"],
        },
        price: {
            type: mongoose.SchemaTypes.Number,
            min: [10000, "Kamida 10000 so'm bo'lsin"],
            max: [12000000, "Ko'pi bilan 12000000 so'magacha bo'lsin"],
        },
        quantity: {
            type: mongoose.SchemaTypes.Number,
            min: [1, "Kamida 1 dona bo'lishi kerak"],
        },
        rating: {
            type: mongoose.SchemaTypes.Number,
            min: 1,
            max: 5,
            default: 1,
        },
        manufacture_year: {
            type: mongoose.SchemaTypes.Date,
        },
    },
    {
        collection: "products",
        timestamps: true,
    },
);

export const Product = mongoose.model("Product", ProductSchema);
