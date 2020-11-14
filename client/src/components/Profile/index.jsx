import React from "react"
import styles from "./Profile.module.css"
import {NavLink,Link} from "react-router-dom"

const Profile = () => {
    return (
        <div className={styles.profile}>
            <p className={styles.title}>hintlikaraemre</p>
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

            <NavLink to="/" className={styles.titlebottom}>entry(62)</NavLink>






            <div style={{width:"75%" , marginTop:"30px"}}>
            <Link to="/" className={styles.entrytitle} href="#">sağlık bakanlığı'nın ankara suyu raporu</Link>
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


            <div style={{width:"75%" , marginTop:"30px"}}>
            <Link to="/" className={styles.entrytitle} href="#">sağlık bakanlığı'nın ankara suyu raporu</Link>
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


            <div style={{width:"75%" , marginTop:"30px"}}>
            <Link to="/" className={styles.entrytitle} href="#">sağlık bakanlığı'nın ankara suyu raporu</Link>
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


            <div style={{width:"75%" , marginTop:"30px"}}>
            <Link to="/" className={styles.entrytitle} href="#">sağlık bakanlığı'nın ankara suyu raporu</Link>
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





        </div>
    )
}


export default Profile