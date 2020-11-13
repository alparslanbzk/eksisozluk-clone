import React from "react"
import "./App.css"
import Header from "./components/Header/"
import Navbar from "./components/Navbar/"
import Content from "./components/Content/"

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Navbar />
                <Content />

            </div>


        </div>
    )
}

export default App
