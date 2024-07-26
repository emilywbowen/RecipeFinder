import React, { useContext, useState } from "react";
import RecipeSearch from "./RecipeSearch";
import { UserContext } from "../context/UserProvider";

export default function RecipeForm(props) {
  const {addRecipe} = useContext(UserContext)

  const initInputs = {
    title: props.title || "",
    category: props.category || "",
    area: props.area || "",
    difficulty: props.difficulty || "",
    time: props.time || "",
    feeds: props.feeds || "",
    mainIngredient: props.mainIngredient || "",
    ingredientList: props.ingredientList || "",
    directions: props.directions || "",
    imgUrl: props.imgUrl || ""
  };

  const [inputs, setInputs] = useState(initInputs);
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    
    e.preventDefault();
    console.log(inputs);
    props.submit(inputs, props._id);
    addRecipe(inputs),
    setInputs(initInputs); 
    setIsSubmitted(true)
    console.log("Handled properly")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Recipe Title"
      />

      <select
        type="text"
        name="category"
        value={inputs.category}
        onChange={handleChange}
        placeholder="Recipe Category (ex: vegetarian, kid-friendly, etc)"
      >
        <option value="">Select a Category</option>
        <option value="budget-friendly">Budget Friendly</option>
        <option value="kid-friendly">Kid Friendly</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Desserts</option>
        <option value="vegetarian">Vegetarian</option>
      </select>

      <input
        type="text"
        name="area"
        value={inputs.area}
        onChange={handleChange}
        placeholder="Area (ex: Asian, Russian, etc)"
      />

      <input
        type="text"
        name="difficulty"
        value={inputs.difficulty}
        onChange={handleChange}
        placeholder="Difficulty level"
      />

      <input
        type="text"
        name="feeds"
        value={inputs.feeds}
        onChange={handleChange}
        placeholder="Servings?"
      />

      <input
        type="text"
        name="time"
        value={inputs.time}
        onChange={handleChange}
        placeholder="Estimated time"
      />

      <input
        type="text"
        name="mainIngredient"
        value={inputs.mainIngredient}
        onChange={handleChange}
        placeholder="Main Ingredient"
      />

      <input
        type="text"
        name="ingredientList"
        value={inputs.ingredientList}
        onChange={handleChange}
        placeholder="Ingredients and measurements"
      />

      <input
        type="text"
        name="directions"
        value={inputs.directions}
        onChange={handleChange}
        placeholder="Recipe Directions"
      />

      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="Recipe Image URL"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
