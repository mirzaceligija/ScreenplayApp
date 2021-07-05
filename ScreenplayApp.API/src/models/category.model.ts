import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document  {
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    },
    { timestamps: true }
);

const Category = module.exports = mongoose.model<CategoryDocument>("Category", CategorySchema);

export default Category;