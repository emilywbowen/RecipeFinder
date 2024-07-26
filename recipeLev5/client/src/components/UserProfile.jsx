import React, { useEffect, useContext } from "react";
import Save from "./Save";
import {UserContext} from "../context/UserProvider"
import RecipeForm from "./RecipeForm";
import UserRecipeContainer from "./UserRecipeContainer";
import UserRecipes from "./UserRecipes";

export default function UserProfile(){
    const {getUserRecipes, user, addRecipe, userState} = useContext(UserContext)

    useEffect(() =>{
        getUserRecipes()

    }, [])
    console.log(userState)

    return(
        <div>
            <h2 className="heading">Welcome {user.username}!</h2>

            <h1 className="body">Submit your own recipe!</h1>
            <RecipeForm submit={addRecipe} btnText="Submit"/>
            
        <div>
            <h1 className="body">Your recipes are below!</h1>
            {userState !== null ? (
                <UserRecipeContainer recipes = {userState} />
            ):
            (
                <p>Loading Recipes...yum</p>
            )}
        </div>

            {/* <RecipeList recipes = {recipes}/> */}
        </div>
    )
}