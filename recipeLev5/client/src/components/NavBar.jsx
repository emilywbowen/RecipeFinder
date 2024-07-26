import React, {useContext} from "react"
import { Link } from "react-router-dom"

export default function NavBar(props) {
  const {logout} = props
return(

  <nav style={{margin: 10}}>
     <Link to="/" style={{padding: 5}}> 
     Home
     </Link>

     <Link to="/about" style={{padding: 5}}> 
     <button>About</button> 
     </Link>

     <Link to="/allRecipes" style={{padding: 5}}>
     <button>All Recipes</button></Link>

     <Link to="/search" style={{padding: 5}}> 
     <button>Recipe Search</button> 
     </Link>

     <Link to="/profile" style={{padding: 5}}> 
     <button>Profile</button> 
     </Link>

     <Link to = "/"><button onClick = {logout}>Logout</button></Link>

   </nav>

   )
}
{/* <Route path="/allRecipes" element={<AllRecipes />}/> */}