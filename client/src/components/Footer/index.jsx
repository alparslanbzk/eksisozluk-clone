import React from "react"
import styles from "./Footer.module.css"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.list}>
                    <Link to="/">iletişim</Link>
                    <Link to="/reklam">reklam</Link>
                    <Link to="/#">kariyer</Link>
                    <Link to="/#">kullanım koşulları</Link>
                    <Link to="/#">gizlilik politikamız</Link>
                    <Link to="/#">sss</Link>
                    <Link to="/#">istatistikler</Link>
                    <Link to="/#">sub-etha</Link>
                    <Link to="/#">instagram</Link>
                    <Link to="/#">twitter</Link>
                    <Link to="/facebook">facebook</Link>


                    

            </div>
        </div>
    )
}



export default Footer



