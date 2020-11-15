import React,{useState,useEffect} from "react"
import styles from "./Signin.module.css"
import {Link,useHistory} from "react-router-dom"
import axios from "axios"

const Signin = () => {
    const History = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    // useEffect(() => {
    //     console.log(email,"||",password)
    // }, [email,password])

    const postData = () => {
        // console.log(email)


        axios.post('/signin',{
            email,
            password
        })
        .then(response => {
            console.log(response.data.user)
            localStorage.setItem("jwt",response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.user))
            History.push("/")
        })
        .catch(err => {
            console.log(err)
        })

    }


    return (
        <div className={styles.signin}>

            <p className={styles.sigintitle}>giriş</p>
            <form className={styles.form}>
                <p>email</p>
                <input 
                className={styles.input} 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <p>password</p>
                <input 
                className={styles.input} 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button 
                className={styles.button}
                onClick={(e) => {
                    e.preventDefault()
                    postData()
                }}
                >giriş yapmaya çabala
                </button>
            </form>
            <p className={styles.sigintitle}>giremeyiş</p>
            <Link to="/" className={styles.siginlink}>şifre mi unuttum</Link>
            <Link to="/" className={styles.siginlink}>kayıtlı kullanıcı olunası</Link>
        
        </div>
    )
}

export default Signin

