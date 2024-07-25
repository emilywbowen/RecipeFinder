import React from "react";
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

    }

    const [userState, setUserState] = useState(initState)

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

    return(
        <UserContext.Provider value = {{
            ...userState,
            signup,
            login,
            logout,
            handleAuthErr,
            resetAuthErr, 
            handleUpvote,
            handleDownvote
        }}>

        {props.children}
        </UserContext.Provider>
    )

}