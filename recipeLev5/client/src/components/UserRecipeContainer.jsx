import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import UserRecipes from "./UserRecipes";




export default function UserRecipeContainer(){
    const {userState} = useContext(UserContext)
    console.log(userState)

    return (
        <>
            <h1>Help</h1>
            {userState.map(recipe => (
                <UserRecipes {...recipe} key = {recipe._id}/>
            ))}
            {/* <UserRecipes /> */}

        </>
    )

}