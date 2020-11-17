import React, { useState, useEffect } from "react"
import styles from "./Entry.module.css"
import { Link } from "react-router-dom"
import axios from "axios"

const Entry = () => {

    const [data, setData] = useState([])
    const [islike, setIsLike] = useState(false)

    useEffect(() => {
        axios.get('/allpost')
            .then(response => {
                // console.log(response.data.posts)
                setData(response.data.posts)
            })
    }, [data])


    const likePost = async (id) => {
        
        if (islike) {
            return null
        } else {
            axios.put('/like', {
                postId: id
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")

                }
            }).then(response => {
                
            const newData = data.map(item=>{
                if(item._id == response._id){
                    return response
                }else{
                    return item
                }
            })

            setData(newData) 
                
            })
        }



    }



    const unlikePost = (id) => {
        axios.put('/unlike', {
            postId: id
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(response => {
            
            const newData = data.map(item=>{
                if(item._id == response._id){
                    return response
                }else{
                    return item
                }
            })

            
            setData(newData)
        })
    }

    return (
        <div className={styles.entry}>


            {data.map(items => {
                return (
                    <div key={items._id}>
                        <Link to={`/details/${items._id}`} className={styles.entrytitle} href="#">{items.title}</Link>
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
                                <img src="/arrow.svg" alt="facebook" onClick={() => {
                                    unlikePost(items._id)
                                }} />
                                <small className={styles.likeslength}>{items.likes.length}</small>
                            </div>
                            <div className={styles.nick}>
                                <Link to="/" className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                                <Link to={`/user/${items.postedBy._id}`} className={styles.name}> {items.postedBy.nick}</Link>
                            </div>
                        </div>
                    </div>
                )
            })}












        </div>





    )
}


export default Entry