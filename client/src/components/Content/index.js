import React from "react"
import styles from "./Content.module.css"
import Posts from "../Posts"
import Footer from "../Footer"

const Content = () => {
    return (
        <div className={styles.content}>
            <Posts />
            <Footer />
        </div>
    )
}

export default Content