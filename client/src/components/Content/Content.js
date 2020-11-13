import React from "react"
import styles from "./Content.module.css"
import Posts from "../Posts/Posts"

const Content = () => {
    return (
        <div className={styles.content}>
            <Posts />
            
        </div>
    )
}

export default Content