import React, {useState, useContext, useEffect} from "react";
// import { ThemeContext } from "./ContextProvider";
import axios from "axios";

export default function Home(){
    // const {color} = useContext(ThemeContext)
    // console.log(color)
    

    return(
        <div>
            <h1 className="heading">Do you miss having Grandma's old cookbook within arms reach? Have you done the Marie Kondo method and reduced your books to 5? This website is for you! Submit your favorite recipe or search countless others!</h1>
        </div>
    )
}