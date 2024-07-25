import RecipeForm from "../RecipeForm";


export default function SubmitRecipe({addRecipe}){


    return (
        <div>
            <RecipeForm submit={addRecipe} btnText="Submit"/>
        
        </div>
    )
}