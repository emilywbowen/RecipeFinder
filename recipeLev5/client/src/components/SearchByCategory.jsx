// dropdown = select

import React, { useState, useEffect} from "react";
import axios from "axios"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm";

export default function SearchByCategory(props){
    const {recipes} = props

    // function getRecipes(){
    //     axios.get("/api/recipes")
    //     .then(res => setRecipes(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }
    // console.log(getRecipes)

    // function getByCategory(){
    //     axios.get("api/recipes/category")
    //     .then(res => setRecipes(res.data))
    //     .catch(err => console.log(err))
    //     }

    const [formData, setFormData] = useState({
        category: ''
    })

    function handleChange(e){
        const {name,type, value} = e.target
        setFormData(prev => {
            return {
                ...prev, 
                [name]: value
            }
        })
        
    }
    
    const [filteredRecipes, setFilteredRecipes] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setFilteredRecipes(recipes.filter(recipe => recipe.category === formData.category))
    }

    // useEffect(() => {
    //     getByCategory()
    // },[])
   


return(
    <>
        <form onSubmit={handleSubmit}>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required>
                    <option value ="">Select a Category</option>
                    <option value ="budget-friendly">Budget Friendly</option>
                    <option value ="kid-friendly">Kid Friendly</option>
                    <option value ="breakfast">Breakfast</option>
                    <option value ="lunch">Lunch</option>
                    <option value ="dinner">Dinner</option>
                    <option value ="dessert">Desserts</option>
                    <option value ="vegetarian">Vegetarian</option>

                </select>
                <button>Search</button>
        </form>
            
        <div>
            { filteredRecipes.map(recipe =>
                <Recipe
                {...recipe}
                key={recipes.category}/>)
                
            }
        </div>
    </>
)}