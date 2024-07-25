import React, {useContext} from "react";
// import { ThemeContext } from "./ContextProvider";

export default function About(props){
   
    return(
        <div>
            <h1 className="heading">Here's some text about this website.</h1>
            <h2 className="body">At this time, this website will allow a user to get a list of recipes I have added to a database. The user is able to search by category using a dropdown menu. </h2>

                <p>Future updates: search by main ingredient, search by cultural area, post your own recipe, save a recipe to your profile, edit recipes saved to your profile, create a shopping list based on ingredients, delete a recipe from your profile. This will require user authentication. 

                Future plans: Work with Ashley to create a true usable app to deploy to the app store.
            </p>
        </div>
        
    )
}