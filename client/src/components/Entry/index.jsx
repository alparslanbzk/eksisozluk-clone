import React , {useState,useEffect} from "react"
import styles from "./Entry.module.css"
import {Link} from "react-router-dom"
import axios from "axios"

const Entry = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('/allpost')
        .then(response => {
            console.log(response.data.posts)
            setData(response.data.posts)
        })
    },[] )


    const likePost = (id) => {

        axios.put('/like',{
            postId:id
        },{
            headers:  {
                "Authorization":"Bearer "+localStorage.getItem("jwt")

            }
        }).then(response=> {
            // if(response.error){
            //     console.log(response.error)
            // }
            console.log(response)
        })
        
    }

    return (
        <div className={styles.entry}>
            

            {data.map(items => {
                return  (
                    <div key={items._id}>
            <Link to="/" className={styles.entrytitle} href="#">{items.title}</Link>
            <p className={styles.entrybody}>{items.body}</p>


                <div className={styles.bottomMenu}>
                <div className={styles.icons}>
                <img src="/facebook.svg" alt="facebook" />
                <img src="/twitter.svg" alt="facebook" />
                <img className={styles.rotatearrow} src="/arrow.svg" alt="facebook" 
                onClick={() => {
                    likePost(items._id)
                }}
                />
                <img  src="/arrow.svg" alt="facebook" onClick={() => {
                    console.log("aşağı çalışıyor")
                }}/>
                </div>
                <div className={styles.nick}>
                    <Link to="/"  className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                    <Link  to="/profile"  className={styles.name}> {items.postedBy.nick}</Link>
                </div>
                </div>
            </div>
                )
            })}
            



            
            

          
            

            

        </div>





    )
}


export default Entry