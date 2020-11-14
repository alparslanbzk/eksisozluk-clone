import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CreateEntry from "../components/Create"

const Create = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <div >
                    <CreateEntry />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Create