import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './context/UserProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
    // <Router>
      <UserProvider>
        <App />
      </UserProvider>
    // {/* </Router> */}
)
