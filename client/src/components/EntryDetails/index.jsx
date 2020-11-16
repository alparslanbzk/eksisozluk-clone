import React,{useEffect,useState} from "react"
import styles from "./EntryDetails.module.css"
import {NavLink,Link,useParams} from "react-router-dom"
import axios from "axios"


//params:postId



const EntryDetails = () =>  {

    const [post,setPost] = useState({})

    const {_id}= useParams()
    // console.log("çalışıyor entrydetails")
    

    useEffect(() => {
        console.log(_id)
        axios.get(`/post/${_id}`)
        .then(results => {
            console.log(results.data.post)
            setPost(results.data.post)
        })
    }, [])


    return (
        <div className={styles.details}>
            <p className={styles.title}>{post?post.title:"loading"}</p>
            <div className={styles.header}>
            <NavLink to="/" className={styles.headeralt}>şükela:  tümü | bugün</NavLink>
            <NavLink to="/" className={styles.headeralt}> başlıkta ara</NavLink>
            <NavLink to="/" className={styles.headeralt}>takip et</NavLink>
            </div>


            <div style={{marginTop:"40px"}}>
            <p className={styles.entrybody}>{post?post.body:"loading"} </p>


                <div className={styles.bottomMenu}>
                <div className={styles.icons}>
                <img src="/facebook.svg" alt="facebook" />
                <img src="/twitter.svg" alt="facebook" />
                <img className={styles.rotatearrow} src="/arrow.svg" alt="facebook" />
                <img  src="/arrow.svg" alt="facebook" />
                </div>
                <div className={styles.nick}>
                    <Link to="/"  className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                    <Link  to="/"  className={styles.name}> {post?post.postedBy.nick:"loading"}</Link>
                </div>
                </div>
            </div>

            <div className="comment">
                <form className={styles.form} action="#">
                    <textarea className={styles.textarea} name="" id="" style={{width:"586px",height:"100px",marginTop:"70px",fontSize:"14px",padding:"15px"}} placeholder="korona virüs hakında ne düşünüyorsunuz"></textarea>
                    <button className={styles.button}>Yolla</button>
                </form>
            </div>




        </div>




    )
}

export default EntryDetails