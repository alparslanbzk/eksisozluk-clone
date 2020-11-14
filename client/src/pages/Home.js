import React from "react";
import Header from "../components/Header/"
import Navbar from "../components/Navbar/"
import Content from "../components/Content/"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <Content />

            </div>
        </div>
    )
}

export default Home;