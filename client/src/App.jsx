import React from "react"
import "./App.css"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Details from "./pages/Details"
import Create from "./pages/Create"

const App = () => {
    return (
        <div className="app">
           <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/details/:id" component={Details}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/create" component={Create}/>
                
                
           </BrowserRouter>


        </div>
    )
}

export default App
