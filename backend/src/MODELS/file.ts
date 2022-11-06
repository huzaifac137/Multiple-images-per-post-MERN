import { Schema } from "inspector";
import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    file: [{ type: String, required: true }]
})

module.exports = mongoose.model("file", fileSchema);