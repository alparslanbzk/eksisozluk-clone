import React ,{useState} from "react"
import styles from "./Create.module.css"
import axios from "axios"

const Create = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const createPost = (e) => {
        e.preventDefault()
        axios.post("/create", {
            title,
            body
          }, {
            headers: {
              'Authorization': 'Bearer ' +localStorage.getItem('jwt')
            }
          })
          .then(response => {
              console.log(response.data.message)
          }).catch(err=> {
              console.log(err)
          }
          )


    }


    return (
        <div className={styles.create}>
            <div >
                <form className={styles.form} action="#" onSubmit={(e) => 
                    createPost(e) } >
                    <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="başlık gir bi tane" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea 
                    className={styles.textarea} 
                    name="" id="" 
                    style={{ width: "586px", height: "100px", fontSize: "14px", padding: "15px" }} 
                    placeholder="bi şeyler yaz işte"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>



                    <button className={styles.button}>Yolla</button>
                    {/* <select className={styles.select} id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="vw">VW</option>
                        <option value="audi" selected>Audi</option>
                    </select> */}
                </form>
            </div>
        </div>
    )
}


export default Create