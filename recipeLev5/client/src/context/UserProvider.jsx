import React, {useEffect, useState} from "react";
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider(props){

    const initState = {
        user : JSON.parse(localStorage.getItem("user")) || {},
        token : localStorage.getItem("token") || "",
        allRecipes: [],
        recipes: []

    }

    const [userState, setUserState] = useState(initState)
    const [recipes, setRecipes] = useState([])
    // const [recipeState, setRecipeState] = useState([])


    async function signup(creds) {
        try {
            const res = await axios.post("/api/auth/signup", creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    function resetAuthErr(){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg: ""
            }
        })
    }

    async function login(creds){
        try {
            const res = await axios.post("/api/auth/login", creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg
            }
        })
    }

    console.log(userState.user)

    async function handleUpvote(recipeId) {
        try {
            const res = await userAxios.put(`/api/main/recipes/upvotes/${recipeId}`)
            console.log(res.data)
            setRecipeState(prevRecipes => prevRecipes.map(recipe => recipe._id === recipeId ? res.data: recipe))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    recipes: prevUserState.recipes.map(recipe => recipe._id === recipeId ? res.data: recipe)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDownvote(recipeId) {
        try {
            const res = await userAxios.put(`/api/main/recipes/downvotes/${recipeId}`)
            console.log(res.data)
            setRecipeState(prevRecipes => prevRecipes.map(recipe => recipe._id === recipeId ? res.data: recipe))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    recipes: prevUserState.recipes.map(recipe => recipe._id === recipeId ? res.data: recipe)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


    // function getRecipes(){
    //     axios.get("/api/recipes")
    //     .then(res => setRecipes(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }
//     useEffect(() => {
//       getRecipes()
//   }, [])

// get all
  async function getRecipes(){
    try {
        const res = await userAxios.get("/api/recipes")
        setRecipes(res.data)
    } catch (error) {
        console.log(error)
    }
  }
// get by user

  async function getUserRecipes() {
    try {
        const res = await userAxios.get("/api/recipes/user")
        setUserState(prevState => {
            return {
                ...prevState,
                recipes: res.data
            }
        })
    } catch (error) {
        console.log(error)
    }
  }

// post
//   function addRecipe(newRecipe){
//     axios.post('/api/recipes', newRecipe)
//     .then(res => setRecipes(prevRecipes => [...prevRecipes, res.data]))
//     .catch(err => console.log(err))
//   }

  async function addRecipe(newRecipe){
    try {
        await userAxios.post("/api/recipes", newRecipe)
        getRecipes()
        // setRecipes(prevState => {
        //     return{
        //         ...prevState,
                // recipes: [...prevState.recipes, res.data]
        //     }
        // })
    } catch (error) {
        console.log(error)
    }
  }

//   edit

// delete

    return(
        <UserContext.Provider value = {{
            ...userState,
            signup,
            login,
            logout,
            handleAuthErr,
            resetAuthErr, 
            handleUpvote,
            handleDownvote,
            getRecipes,
            recipes,
            addRecipe,
            getUserRecipes 
        
        }}>

        {props.children}
        </UserContext.Provider>
    )

}