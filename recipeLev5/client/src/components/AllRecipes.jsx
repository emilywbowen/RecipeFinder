import React, { useState, useEffect, useContext} from "react";
import axios from "axios"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm";
import { UserContext } from "../context/UserProvider";



export default function AllRecipes(){

    const {getRecipes, recipes} = useContext(UserContext)


useEffect(() => {
    getRecipes()
}, [])

console.log(recipes)

return(
    <div>
        {recipes.map(recipe =>
            <Recipe
            {...recipe}
            key={recipe.title}/>)
            
        }
    </div>
)}