import React, {useState, useContext} from "react"
import LoginForm from "./LoginForm"
import { UserContext } from "../context/UserProvider"

export default function Auth(){
    const {login, signup, errMsg, resetAuthErr} = useContext(UserContext)

    const [isMember, setIsMember] = useState(false)

    const toggleForm = () => {
        setIsMember(prev => !prev)
        resetAuthErr()
    }

    return(
        <div id = "auth-div">

            {
                isMember ?

                <>
                <LoginForm
                isMember = {isMember}
                submit = {login}
                errMst = {errMsg}/>

                <button onClick = {toggleForm} >Create an Account?</button>
                </>

                :

                <>
                <LoginForm
                isMember = {isMember}
                submit = {signup}
                errMsg = {errMsg}/>
                <button onClick={toggleForm}>Already a Member?</button>
                </>
            }

        </div>
    )



}