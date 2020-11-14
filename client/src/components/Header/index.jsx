import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (

        <div className={styles.header}>


            <div className={styles.topheader}>

                <div>
                    <a href="/">
                        <img className={styles.logo} src="/eksisozluk_logo.svg" alt="eksisozluk" />
                    </a>
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
                    <a href="/signin">giriş</a>
                    <a href="/signin">kayıt ol</a>
                </div>

            </div>

            <div className={styles.bottomheader}>
                <div className={styles.category}>
                    <ul>
                        <li>
                            <a>gündem</a>
                        </li>
                        <li>
                            <a>debe</a>
                        </li>
                        <li>
                            <a>sorunsallar</a>
                        </li>
                        <li>
                            <a>spor</a>
                        </li>
                        <li>
                            <a>ilişkiler</a>
                        </li>
                        <li>
                            <a>siyaset</a>
                        </li>
                        <li>
                            <a className={styles.marginreset}>
                                <img src="/ellipsis.svg" alt="dssd"/>
                            </a>
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