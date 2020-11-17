import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Userx from "../components/Profile"

const User = () => {
    return (
        <div>


            <Header />
            <div className="container">
                <Navbar />
                <div >
                    <Userx />
                    <Footer />
                </div>

            </div>
        </div>
    )
}


export default User