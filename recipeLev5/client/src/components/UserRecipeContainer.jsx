import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import UserRecipes from "./UserRecipes";




export default function UserRecipeContainer(){
    const {userRecipes} = useContext(UserContext)
    console.log(userRecipes)

    return (
        <>
            {userRecipes.map(recipe => (
                <UserRecipes {...recipe} key = {recipe._id}/>
            ))}
            {/* <UserRecipes /> */}

        </>
    )

}