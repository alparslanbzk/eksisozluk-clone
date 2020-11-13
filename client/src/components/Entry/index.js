import React from "react"
import styles from "./Entry.module.css"


const Entry = () => {
    return (
        <div className={styles.entry}>

            <div>
            <a className={styles.entrytitle} href="#">sağlık bakanlığı'nın ankara suyu raporu</a>
            <p className={styles.entrybody}>diyor ki;
            "demir, nitrat, aluminyum, arsenik, perfringens, enterokok, eschericis coli ve koliform bakteri parametreleri yönünden insani tüketim amaçlı sular hakkında yönetmelikte belirtilen sınır değerlere göre uygunsuz ve serbest klor düzeyinin yetersiz olduğu saptanmıştır."
            görüldüğü üzere içinde bir biz yokuz.
melih? yaşıyor musun? </p>


                <div className={styles.bottomMenu}>
                <div className={styles.icons}>

                </div>
                <div className={styles.nick}>
                    <a className={styles.date}>06.01.2018 13:05 ~ 13:53</a>
                    <a className={styles.name}> sanikmagdur</a>
                </div>
                </div>
            </div>

            
            

          
            

            

        </div>





    )
}


export default Entry