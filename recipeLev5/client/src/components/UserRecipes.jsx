import RecipeForm from "./RecipeForm";


export default function UserRecipes(props){
   
    const {title, category, area, difficulty, time, feeds, mainIngredient, ingredientList, directions, imgUrl} = props
    return (
        <div>
             <h1>Title: {title}</h1>
            <p className="recipeDetails"> Category: {category}</p>
            <p className="recipeDetails"> Area: {area}</p>
            <p className="recipeDetails"> Main Ingredient: {mainIngredient}</p>
            <p className="recipeDetails"> Feeds: {feeds} servings, Difficulty: {difficulty}, Time: {time}</p>
            <p className="recipeDetails"> Ingredients: {ingredientList} </p>
            <p className="directions"> Directions: {directions}</p>
            {imgUrl ? (
            <img src={imgUrl} alt={title} className="img"/>
            )
            :
            (<p>No Image </p>)
            }

        </div>
    )
}