import auth from "../Config"
import { signOut } from "firebase/auth"
import React from "react"
import { navigate, useNavigate } from "react-router-dom"

const Landing = () => {
    
    const navigate = useNavigate()
    const signoutfunc=()=>{
        signOut(auth)
        .then(()=>{
            console.log("successfully logout")
            navigate('/')
        })
        
    }


  return (
    <>
        <h2>Landing</h2>
        <button onClick={signoutfunc}>Signout</button>
    </>
        
  )
}

export default Landing