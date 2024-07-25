const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    difficulty: {
        type: String
    },
    time: {
        type: String,
        required: true
    },
    feeds: {
        type: Number,
        required: true
    },
    mainIngredient: {
        type: String,
        required: true
    },
    ingredientList: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)



