import React from "react"
import styles from "./Signup.module.css"
import {Link} from "react-router-dom"

const Signup = () => {
    return (
        <div class={styles.signin}>

            <p className={styles.sigintitle}>giriş</p>
            <form className={styles.form}>
                <p>nick</p>
                <input className={styles.input} type="text"/>

                <p>email</p>
                <input className={styles.input} type="email"/>

                <p>password</p>
                <input className={styles.input} type="password"/>

                <button className={styles.button}>kayıt olmaya çabala</button>
            </form>
            <p className={styles.sigintitle}>zaten varış</p>
            <Link className={styles.siginlink}>giriş yapılası</Link>
        
        </div>
    )
}

export default Signup

