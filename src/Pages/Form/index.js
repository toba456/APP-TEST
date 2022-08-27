import { useState } from "react";
import { styles } from './styles'

function Form() {
    const [ name, setName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const handleSubmit = () => {
        console.log(name.toUpperCase() + " " + lastName.toLocaleUpperCase())
        setName("")
        setLastName("")
    }
    const handleChangeName = e => {
        const value = e.target.value
        setName(value)
    }
    const handleChangeLastName = e => {
        const value = e.target.value
        setLastName(value)
    }

     return (
        <div style={styles.container}>
            <h3>Form</h3>
          <form>
            <div class="form-group">
                <input type={"text"} style={styles.input} class="form-control"  value={name} onChange={handleChangeName} aria-describedby="emailHelp" placeholder="Name"/>
            </div>
            <div class="form-group">
                <input type={"text"} style={styles.input} class="form-control"   value={lastName} onChange={handleChangeLastName}  placeholder="Last Name"/>
            </div>
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
       
     );
   }
   
   export default Form;
   