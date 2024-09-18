import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Config";
import './Login.css'

const Login = () => {
    const [user,setUser] = useState([])
    const [pass,setPass] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("logged in")
                navigate('/Home')
            }
            else{
                console.log('failed')
            }
        })
    },[])

    const loginfunc=()=>{
        signInWithEmailAndPassword(auth,user,pass)
        .then(()=>{
            console.log("logged in Successfully")
            navigator('/')
        })
        .catch((error)=>console.log("Invalid login credentitials", error))
    }

  return (
    <div className="container-login">
        <h1 className="mb-4 text-light">Login Here !!</h1>
        <input className="input-login" onChange={(e)=>{setUser(e.target.value)}}   placeholder="Enter your e-mail"></input>
        <br />
        <input className="input-login" onChange={(e)=>{setPass(e.target.value)}}  placeholder="Enter your Password"></input>
        <br />
        <button className="btn-login" onClick={loginfunc} >Login</button>
        <p className="text-light para-login">If you don't have a account <Link className="text-dark" to={'/Signup'}>Singup</Link> here</p>
    </div>
  )
}

export default Login