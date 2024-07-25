import React, { useContext } from "react";
import Save from "./Save";
import {UserContext} from "../context/UserProvider"

export default function UserProfile(){
    const {login, signup, errMsg, resetAuthErr, user, getUserRecipes} = useContext(UserContext)

    useEffect(() =>{
        getUserRecipes()

    }, [])

    return(
        <div>
            <h2 className="heading">Welcome {user.username}!</h2>

            <h1 className="body">Submit your own recipe!</h1>
            <RecipeForm submit={addRecipe} btnText="Submit"/>
            

            <h1 className="body">Your recipes are below!</h1>
            <RecipeList recipes = {recipes}/>
        </div>
    )
}