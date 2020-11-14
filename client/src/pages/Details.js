import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import EntryDetails from "../components/EntryDetails"

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <div >
                    <EntryDetails />
                    <Footer />
                </div>

            </div>
        </div>
    )
}


export default Profile