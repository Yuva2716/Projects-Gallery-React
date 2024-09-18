import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import auth from "../../Config";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {
    const [user,setUser] = useState([])
    const [pass,setPass] = useState([])

    const navigate = useNavigate()

    const Signupfunc=()=>{
        createUserWithEmailAndPassword(auth,user,pass)
        .then(()=>{
            console.log('register')
            navigate('/Home')
        })        
        .catch((error)=>console.log(error))
    }

  return (
    <div className="container-signup">
        <h1 className="mb-4 text-light">Signup Here !!</h1>
        <input onChange={(e)=>{setUser(e.target.value)}} className="input-signup"  placeholder="Enter your e-mail"></input>
        <br />
        <input onChange={(e)=>{setPass(e.target.value)}} className="input-signup" placeholder="Enter your Password"></input>
        <br />        
        <button onClick={Signupfunc} className="btn-signup" >Signup</button>
        <p className="text-light para-signup">If you already have a account <Link className="text-dark" to={'/'}>Login</Link> here</p>
    </div>
  )
}

export default Signup