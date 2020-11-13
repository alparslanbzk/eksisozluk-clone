import React from "react"
import styles from "./Posts.module.css"
import Entry from "../Entry/Entry"
import Banner from "../Banner/Banner"

const Posts = () => {
    return (
        <div className={styles.posts}>
                <Entry />
                <Banner />
        </div>
    )
}

export default Posts