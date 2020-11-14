import React from "react"
import styles from "./Signin.module.css"
import {Link} from "react-router-dom"

const Signin = () => {
    return (
        <div class={styles.signin}>

            <p className={styles.sigintitle}>giriş</p>
            <form className={styles.form}>
                <p>email</p>
                <input className={styles.input} type="email"/>

                <p>password</p>
                <input className={styles.input} type="password"/>

                <button className={styles.button}>giriş yapmaya çabala</button>
            </form>
            <p className={styles.sigintitle}>giremeyiş</p>
            <Link className={styles.siginlink}>şifre mi unuttum</Link>
            <Link className={styles.siginlink}>kayıtlı kullanıcı olunası</Link>
        
        </div>
    )
}

export default Signin

