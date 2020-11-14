import React from "react"
import "./App.css"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

const App = () => {
    return (
        <div className="app">
           <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
           </BrowserRouter>


        </div>
    )
}

export default App
