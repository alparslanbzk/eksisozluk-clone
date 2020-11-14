import React from "react"
import "./App.css"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"

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
