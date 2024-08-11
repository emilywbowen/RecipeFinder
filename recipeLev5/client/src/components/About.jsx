import React, {useContext} from "react";
// import { ThemeContext } from "./ContextProvider";

export default function About(props){
   
    return(
        <div>
            <h1 className="heading">Welcome to "Not Your Grandma's Cookbook"!</h1>

            <h2 className="body">Do you miss having Grandma's old cookbook within arms reach? Have you done the Marie Kondo method and reduced your books to 5? This website is for you! Submit your favorite recipe or search countless others!</h2>

            <h2 className="body">
                
                
                At this time, this website will allow a user to get a list of recipes users have added to a database.</h2>

                <ul>Future updates: 
                    <li>search by category, main ingredient, and cultural area</li>
                    <li>edit your own submitted recipe</li>
                    <li>create a shopping list based on ingredients</li>
                    <li>delete a recipe from your profile</li>
                    <li>utilize a basic image for recipes not submitted with an image URL</li>
                    <li>allow users to comment and rate recipes</li>
                </ul>

                <p>Future plans: Work with Ashley to create a true usable app to deploy to the app store.
                </p>
        </div>
        
    )
}