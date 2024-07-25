import React, { useState, useEffect} from "react";
import axios from "axios"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm";

export default function SearchByIngredient({recipes}){
    // const [recipes, setRecipes] = useState([])

    // function getRecipes(){
    //     axios.get("/api/recipes")
    //     .then(res => setRecipes(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }


// useEffect(() => {
//     getRecipes()
// }, [])

return(
    <div>
        {recipes.map(recipe =>
            <Recipe
            {...recipe}
            key={recipe.title}/>)
            
        }
    </div>
)}