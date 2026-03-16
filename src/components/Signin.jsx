
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
  const[email,SetEmail]=useState("")
  const[password,SetPassword]=useState("")

  


  const[loading,SetLoading]=useState("")
  const[success,SetSuccess]=useState("")
  const[error,SetError]=useState("")

  const navigate = useNavigate();


  const submit=async(e)=>{

    e.preventDefault()



    SetLoading("please wait..........")

    

    
    

    try {

      const data=new FormData();

      data.append("email",email);
      data.append("password",password);

      // calling api
      const response= await axios.post("http://kiruialvin.alwaysdata.net/api/signin",data);;

      SetLoading('')

          // reset yor form 
      SetEmail('')
      SetPassword('')
      if (response.data.user){
      // if user is found store suer details in localstorage 
      localStorage.setItem('user',JSON.stringify(response.data.user));
      SetSuccess(response.data.message); 

      // redirect to /getproducts components
      setTimeout(()=>{

        navigate("/")
      },2000)

      }

      else {
        // user not found, show error message 
        SetError(response.data.message)
      }
      // if ther was an error, clear loading


      


   

    } catch (error) {
      SetLoading('')
      SetError(error.message)


      
      
    }
    


   
  }




  

  return (
    <div className='row justify-content-center mt-3'>
        <div className='card shadow col-md-6'>
          <h1>Sign in</h1>
          <form action="" onSubmit={submit}>

           
            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>

            




            <input type="email" placeholder='Email' className='form-control'required value={email}  onChange={(e)=>SetEmail(e.target.value)} />
            <br />
            <input type="password" placeholder='Password' className='form-control' required value={password}  onChange={(e)=>SetPassword(e.target.value)}/>
            <br />
            <input type="submit" value="sign In" className='bg-info w-100 form-control text-white' />
            <br />
            <p>Don't have an account?  <Link to="/Signup">sign up</Link></p>




            
          </form>
        </div>
    </div>
  )

}
export default Signin