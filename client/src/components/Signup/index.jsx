import React,{useState} from "react"
import styles from "./Signup.module.css"
import {Link,useHistory} from "react-router-dom"
import axios from "axios"

const Signup = () => {
    const History = useHistory()
    const [nick,setNick] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

   
    const  PostData = () => {
        console.log("calıstı")
        
      axios.post("/signup",{
          nick,
          email,
          password
      })
      .then((response) => {
        console.log(response.data.message)
        History.push("/signin");
        
      })
      .catch((error) => {
        console.log(error);
      }); 

    } 


    return (
        <div className={styles.signin}>

            <p className={styles.sigintitle}>giriş</p>
            <form className={styles.form}>
                <p>nick</p>
                <input 
                className={styles.input} 
                type="text" 
                value={nick}
                onChange={(e)=> setNick(e.target.value) }/>

                <p>email</p>
                <input 
                className={styles.input} 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value) }
                />

                <p>password</p>
                <input 
                className={styles.input} 
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value) }/>

                <button 
                className={styles.button}
                onClick={(e)=> {
                    e.preventDefault()
                    PostData() }}
                >kayıt olmaya çabala
                </button>
            </form>
            <p className={styles.sigintitle}>zaten varış</p>
            <Link to="/" className={styles.siginlink}>giriş yapılası</Link>
        
        </div>
    )
}

export default Signup

