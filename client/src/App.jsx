import React from "react"
import "./App.css"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./screens/Home"
import Signin from "./screens/Signin"

const App = () => {
    return (
        <div className="app">
           <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/signin" component={Signin}/>
           </BrowserRouter>


        </div>
    )
}

export default App
