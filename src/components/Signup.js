import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
export default function Signup(){
const [Name,setName]=useState("")
const[email,setEmail]=useState("")
const[Password,setPassword]=useState("")
const[Boolean,setBoolean]=useState(false)
const[StrongPassword,setStrongpassword]=useState("")

const navigate = useNavigate()
 function verify(){
    if(Name===""){
        alert("name can't be empty")
         setBoolean(false)
    }
    else if(Name.length<=5 || Name.length>=15){
        alert("name should be maximum character")
        setBoolean(false)
    }
   

    else if(email===""){
        alert("email should be maximum character")
        setBoolean(false)
    }

    else  if(Password===""){
        alert(" password can't be empty")
        setBoolean(false)
    }

    else  if(StrongPassword===""){
        alert("  password can't be empty")
        setBoolean(false)
    }
    else  if(Password!==StrongPassword){
        alert("password  not match")
        setBoolean(false)
    }
    else if(StrongPassword===Password){
        
            setBoolean(true)
         } 
        
          
    else if(Name!=="" && email!=="" && Password!=="" && StrongPassword!==""){
          setBoolean(true)
    // navigate('/Dashboard')

         }
    
 }
    return(
        <div>
            <div id="Signupbox">
                <h2  id="signup">Signup</h2>

            <table><tr>
                    <td><b>Name:</b></td>
                    <td> <input id="user" type="text" autoComplete="off" placeholder="Name"  onChange={(e)=>{
                        setName(e.target.value)
                    }}></input></td>
                     

                </tr>
              
                 <tr>
                <td><b>email:</b></td>
                    <td> <input id="email" type="email"
                     autoComplete="off" placeholder="email"  onChange={(e)=>{
                        setEmail(e.target.value)
                    }}></input></td>
                     
                </tr>
                <tr>
                <td><b>Password:</b></td>
                    <td> <input id="password" type="password" autoComplete="off" placeholder="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input></td>
                     
                </tr>
                <tr>
                <td> <b>Confirm:</b></td>
                    <td> <input id="password" type="password" autoComplete="off" placeholder=" confirm password"  onChange={(e)=>{
                        setStrongpassword(e.target.value)
                    }}></input></td>
                    
                </tr>

                <td><b>Technologies: </b></td>
                    <select id="tecnology">
                    <option>javascript</option>
                    <option>java</option>
                    <option >python</option>
                    <option>scala</option>
                    <option>spark</option>
                    </select> 
                    </table>  
                   
                    <button id="submitBtn"  onClick={() =>{
                        verify()
                {Boolean? navigate('/Dashboard'):<Signup/>}}}>submit</button> 
           
            </div>
        </div>
    )
}

    
