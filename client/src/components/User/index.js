import React,{useContext,useEffect,useState} from "react"
import styles from "./User.module.css"
import {NavLink,Link} from "react-router-dom"
import {UserContext} from "../../App"
import axios from "axios"

const User = () => {

    const {state,dispatch} = useContext(UserContext)

    const [data,setData] = useState()
    // console.log("user çalışıyor")


    useEffect(() => {
        // console.log("çalışıyor")
        axios.get('/user/5fb28f45b0d6874b3ebcb518')
        .then(results => {
            // console.log("bu o", results.data.posts)
            setData(results.data.posts)
            
        })



    },[])

    

    return (
        <div className={styles.profile}>
            <p className={styles.title}>{data&&data[0].postedBy.nick}</p>
            <div className={styles.menu}>
            <NavLink to="/" className={styles.menualt}>takip et</NavLink>
            <NavLink to="/" className={styles.menualt}>engelle başlıklarını</NavLink>
            <NavLink to="/" className={styles.menualt}>engelle</NavLink>
            <NavLink to="/" className={styles.menualt}>mesaj gönder</NavLink>
            </div>
            <div className={styles.menu}>
            <NavLink to="/" className={styles.menualt}>12</NavLink>
            <NavLink to="/" className={styles.menualt}>25</NavLink>
            <NavLink to="/" className={styles.menualt}>142</NavLink>
            <NavLink to="/" className={styles.menualt}>62</NavLink>
            <NavLink to="/" className={styles.menualt}>profile</NavLink>
            </div>
            <div className={styles.header}>
            <NavLink to="/" className={styles.headeralt}>entry'ler</NavLink>
            <NavLink to="/" className={styles.headeralt}>favoriler</NavLink>
            <NavLink to="/" className={styles.headeralt}>görseller</NavLink>
            <NavLink to="/" className={styles.headeralt}>istatistikler</NavLink>
            </div>

            <NavLink to="/" className={styles.titlebottom}>entry({data&&data.length})</NavLink>






            {data && data.map(items => {
                return (
                    <div style={{width:"75%" , marginTop:"30px"}}>
                    <Link to="/" className={styles.entrytitle} href="#">{items.title}</Link>
                    <p className={styles.entrybody}>{items.body}</p>
        
        
                        <div className={styles.bottomMenu}>
                        <div className={styles.icons}>
                        <img src="/facebook.svg" alt="facebook" />
                        <img src="/twitter.svg" alt="facebook" />
                        <img className={styles.rotatearrow} src="/arrow.svg" alt="facebook" />
                        <img  src="/arrow.svg" alt="facebook" />
                        </div>
                        <div className={styles.nick}>
                            <Link to="/"  className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                            <Link  to="/"  className={styles.name}> {items.postedBy.nick}</Link>
                        </div>
                        </div>
                    </div>
                )
            })}







        </div>
    )
}


export default User