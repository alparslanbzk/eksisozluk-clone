import React from "react"
import styles from "./Create.module.css"

const Create = () => {
    return (
        <div className={styles.create}>
            <div >
                <form className={styles.form} action="#">
                    <input className={styles.input} type="text" placeholder="başlık gir bi tane" />
                    <textarea className={styles.textarea} name="" id="" style={{ width: "586px", height: "100px", fontSize: "14px", padding: "15px" }} placeholder="bi şeyler yaz işte"></textarea>
                    <button className={styles.button}>Yolla</button>
                    <select className={styles.select} id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="vw">VW</option>
                        <option value="audi" selected>Audi</option>
                    </select>
                </form>
            </div>
        </div>
    )
}


export default Create