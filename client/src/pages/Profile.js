import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Profilex from "../components/Profile"

const Profile = () => {
    return (
        <div>


            <Header />
            <div className="container">
                <Navbar />
                <div >
                    <Profilex />
                    <Footer />
                </div>

            </div>
        </div>
    )
}


export default Profile