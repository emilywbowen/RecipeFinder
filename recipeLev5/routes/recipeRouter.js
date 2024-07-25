const express = require("express")
const recipeRouter = express.Router()
const {v4: uuidv4} = require("uuid")
const Recipe = require("../models/recipe")

// get all
recipeRouter.get("/", async(req, res, next) => {
    try {
        const foundRecipes = await Recipe.find()
        return res.status(200).send(foundRecipes)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// get by main ingredient
recipeRouter.get("/mainIngredient", async(req, res, next) => {
    try {
        const foundRecipes = await Recipe.find({mainIngredient: req.query.mainIngredient})
        return res.status(200).send(foundRecipes)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// get by category
recipeRouter.get("/category", async(req, res, next) => {
    try {
        const foundRecipes = await Recipe.find({category: req.query.category})
        return res.status(200).send(foundRecipes)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// get by area
recipeRouter.get("/area", async(req, res, next) => {
    try {
        const foundRecipes = await Recipe.find({area: req.query.area})
        return res.status(200).send(foundRecipes)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


// get by random


// post new recipe
recipeRouter.post("/", async(req, res, next) => {
    try {
        const newRecipe = new Recipe(req.body)
        const savedRecipe = await newRecipe.save()
        return res.status(201).send(savedRecipe)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// edit recipe
recipeRouter.put("/:recipeId", async (req, res, next) => {
    try {
        const recipeId = req.params.recipeId
        const updatedRecipe = await Recipe.findByIdAndUpdate( recipeId, req.body, {new: true})
        return res.status(201).send(updatedRecipe)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// delete recipe
recipeRouter.delete("/:recipeId", async(req, res, next) => {
    try {
        const recipeId = req.params.recipeId
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
        return res.status(200).send(`You have deleted ${deletedRecipe.title} from your recipe list.`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


module.exports = recipeRouter