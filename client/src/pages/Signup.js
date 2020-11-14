import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Register from "../components/Signup"


const Signin = () => {
    return (
        <div>

            <Header />
            <div className="container">
                <Navbar />
                <div >
                    <Register />
                <Footer />
                </div>
                
            </div>
        </div>
    )
}

export default Signin

