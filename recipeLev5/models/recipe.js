const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    area: {
        type: String
    },
    difficulty: {
        type: String
    },
    time: {
        type: String,
        required: true
    },
    feeds: {
        type: String
        
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
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)



