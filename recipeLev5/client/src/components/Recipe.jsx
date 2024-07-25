import React, {useState, useContext} from "react";
import RecipeForm from "./RecipeForm";
import RecipeSearch from "./RecipeSearch";

export default function Recipe(props) {
    const { title, category, area, difficulty, time, feeds, mainIngredient, ingredientList, directions, imgUrl, _id} = props

    const [editToggle, setEditToggle] = useState(false)

    console.log(props)

    function handleToggle(){
        setEditToggle(prevToggle => !prevToggle)
    }

    return(
        <div>
            { !editToggle ?
            <>
            <h1>Title: {title}</h1>
            <p className="recipeDetails"> Category: {category}</p>
            <p className="recipeDetails"> Area: {area}</p>
            <p className="recipeDetails"> Main Ingredient: {mainIngredient}</p>
            <p className="recipeDetails"> Feeds: {feeds} servings, Difficulty: {difficulty}, Time: {time}</p>
            <p className="recipeDetails"> Ingredients: {ingredientList} </p>
            <p className="directions"> Directions: {directions}</p>
            <img src={imgUrl} alt={title} className="img"/>
            {/* <button className="delete-btn" onClick={()=>
                props.deleteRecipe(_id)}>Delete Recipe</button>
            <button className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Recipe</button>
             */}
            </>
        :
            <>
            <RecipeForm
            title={title}
            category={category}
            area={area}
            mainIngredient={mainIngredient}
            feeds={feeds}
            difficulty={difficulty}
            time={time}
            ingredientList={ingredientList}
            directions={directions}
            imgUrl={imgUrl}
            handleToggle={handleToggle}
            btnText="Submit Edit"
            submit={props.editRecipe}/>
            <button onClick={() => setEditToggle (prevToggle => !prevToggle)}>Cancel Edit</button>
            </>
            }

        </div>
    )
}