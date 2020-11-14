import React from "react"
import styles from "./EntryDetails.module.css"
import {NavLink,Link} from "react-router-dom"


const EntryDetails = () =>  {
    return (
        <div className={styles.details}>
            <p className={styles.title}>hintlikaraemre</p>
            <div className={styles.header}>
            <NavLink to="/" className={styles.headeralt}>şükela:  tümü | bugün</NavLink>
            <NavLink to="/" className={styles.headeralt}> başlıkta ara</NavLink>
            <NavLink to="/" className={styles.headeralt}>takip et</NavLink>
            </div>



            <div style={{marginTop:"40px"}}>
            <p className={styles.entrybody}>diyor ki;
            "demir, nitrat, aluminyum, arsenik, perfringens, enterokok, eschericis coli ve koliform bakteri parametreleri yönünden insani tüketim amaçlı sular hakkında yönetmelikte belirtilen sınır değerlere göre uygunsuz ve serbest klor düzeyinin yetersiz olduğu saptanmıştır."
            görüldüğü üzere içinde bir biz yokuz.
melih? yaşıyor musun? </p>


                <div className={styles.bottomMenu}>
                <div className={styles.icons}>
                <img src="/facebook.svg" alt="facebook" />
                <img src="/twitter.svg" alt="facebook" />
                <img className={styles.rotatearrow} src="/arrow.svg" alt="facebook" />
                <img  src="/arrow.svg" alt="facebook" />
                </div>
                <div className={styles.nick}>
                    <Link to="/"  className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                    <Link  to="/"  className={styles.name}> sanikmagdur</Link>
                </div>
                </div>
            </div>


            <div style={{marginTop:"40px"}}>
            <p className={styles.entrybody}>diyor ki;
            "demir, nitrat, aluminyum, arsenik, perfringens, enterokok, eschericis coli ve koliform bakteri parametreleri yönünden insani tüketim amaçlı sular hakkında yönetmelikte belirtilen sınır değerlere göre uygunsuz ve serbest klor düzeyinin yetersiz olduğu saptanmıştır."
            görüldüğü üzere içinde bir biz yokuz.
melih? yaşıyor musun? </p>


                <div className={styles.bottomMenu}>
                <div className={styles.icons}>
                <img src="/facebook.svg" alt="facebook" />
                <img src="/twitter.svg" alt="facebook" />
                <img className={styles.rotatearrow} src="/arrow.svg" alt="facebook" />
                <img  src="/arrow.svg" alt="facebook" />
                </div>
                <div className={styles.nick}>
                    <Link to="/"  className={styles.date}>06.01.2018 13:05 ~ 13:53</Link>
                    <Link  to="/"  className={styles.name}> sanikmagdur</Link>
                </div>
                </div>
            </div>

            <div className="comment">
                <form className={styles.form} action="#">
                    <textarea className={styles.textarea} name="" id="" style={{width:"586px",height:"156px",marginTop:"70px",fontSize:"14px",padding:"15px"}} placeholder="korona virüs hakında ne düşünüyorsunuz"></textarea>
                    <button className={styles.button}>Yolla</button>
                </form>
            </div>




        </div>




    )
}

export default EntryDetails