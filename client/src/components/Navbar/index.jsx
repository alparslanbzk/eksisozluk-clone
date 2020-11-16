import React, { useEffect, useState } from "react"
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
import axios from "axios"

const Navbar = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('/allpost')
            .then(result => {
                // console.log(result.data.posts)
                setData(result.data.posts)
                // console.log(data)
                // console.log(result.data.posts)
            })
    }, [])

    return (
        <div className={styles.navbar}>

            <div className={styles.trend}>
                <h2 className={styles.toptitle}>Gündem</h2>
                <img className={styles.settingsicon} src='/settings.svg' alt="" />
            </div>

            
            {data.map(item => {
                return (
                    <Link key={item._id} to={`/details/${data?item._id:"loading"}`}>
                        <div className={styles.title}>
                            <p className={styles.titlecontent}>
                                {data?item.title:"loading"}
                </p>
                            <p className={styles.commentcount}>
                                56
                </p>
                        </div>
                    </Link>
                )
            }) }












        </div>
    )
}

export default Navbar


