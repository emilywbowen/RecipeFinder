import React, { useState, useEffect} from "react";
import axios from "axios"
import Recipe from "../Recipe";
import RecipeForm from "../RecipeForm";

export default function SearchByIngredient(){
    const [recipes, setRecipes] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        console.log(recipes)
        props.submit(recipes, props.mainIngredient)
    }
    

    function getMainIngredient(){
                                                                // var
        axios.get(`/api/recipes/mainIngredient?mainIngredient=${mainIngredient}`)
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }


useEffect(() => {
    getMainIngredient()
}, [])

// input take text type with a submit/enter button
// button onclick would fire the main ingredient get and toggle display
// setup handlechange to store the var

return(
    <>
        <form>
            <input onSubmit={handleSubmit} 
            type="text"
            name="mainIngredient"
            value={recipes.mainIngredient}
            onChange={handleChange}
            placeholder="Search by Main Ingredient"/>
        </form>
        <div>
            { recipes.map(recipe =>
                <Recipe
                {...recipe}
                key={recipe.title}/>)
                
            }
        </div>
    </>
)}