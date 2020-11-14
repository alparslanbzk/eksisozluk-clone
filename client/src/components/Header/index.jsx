import React from 'react'
import styles from './Header.module.css'
import {Link} from "react-router-dom"

function Header() {
    return (

        <div className={styles.header}>


            <div className={styles.topheader}>

                <div>
                    <Link to="/">
                        <img className={styles.logo} src="/eksisozluk_logo.svg" alt="eksisozluk" />
                    </Link>
                </div>
                <div className={styles.searchform}>
                    <form action="">
                        <input type="text" placeholder="başlık, #entry, @yazar" />
                        <img className={styles.arrowicon} src="./down-arrow.svg" alt="settings" />
                        <button>
                            <img className={styles.searchsvg} src="/search.svg" alt="" />
                        </button>
                    </form>
                </div>
                <div className={styles.sign}>
                    <Link to="/signin">giriş</Link>
                    <Link to="/signin">kayıt ol</Link>
                </div>

            </div>

            <div className={styles.bottomheader}>
                <div className={styles.category}>
                    <ul>
                        <li>
                            <Link to="/">gündem</Link>
                        </li>
                        <li>
                            <Link to="/">debe</Link>
                        </li>
                        <li>
                            <Link to="/">sorunsallar</Link>
                        </li>
                        <li>
                            <Link to="/">spor</Link>
                        </li>
                        <li>
                            <Link to="/">ilişkiler</Link>
                        </li>
                        <li>
                            <Link to="/">siyaset</Link>
                        </li>
                        <li>
                            <Link to="/" className={styles.marginreset}>
                                <img src="/ellipsis.svg" alt="dssd"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.other}>
                    <img src="/pena@2x.png"alt="pena"/>
                    <img className={styles.eksiseyler} src="/eksiseyler@2x.png" alt="eksiseyler"/>
                    
                </div>
            </div>

        </div>

    )
}

export default Header