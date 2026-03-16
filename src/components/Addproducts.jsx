import axios from 'axios'
import React, { useState } from 'react'

const Addproducts = () => {
 const[product_name,SetProductname]=useState('')
 const[product_description,SetProductdescription]=useState('')
 const[product_Cost,SetProductcost]=useState('')
 const[product_photo,SetProductPhoto]=useState('')


 const[loading,SetLoading]=useState('')
 const[success,SetSuccess]=useState('')
 const[error,SetError]=useState('')


  const submit=async(e)=>{
    e.preventDefault()

      try {
      
      const data=new FormData()

      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_Cost)
      data.append("product_photo",product_photo)
    

      // calling the api

      const response=await axios.post("http://kiruialvin.alwaysdata.net/api/addproducts",data)
      

     

      SetLoading("")
      SetSuccess(response.data.message)


      // reset your form
      SetProductname("")
      SetProductdescription("")
      SetProductcost("")
      SetProductPhoto("")
      





    } catch (error) {
      SetLoading("")
      SetError(error.message)





      
    }


    
  }


  return (
    <div className='row justify-content-center mt-3'>
       <div className='card shadow col-md-6'>
        <h2>upload products</h2>
        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" placeholder='Enter Product Name'className='form-control' required onChange={(e)=>SetProductname(e.target.value)}/>
          <br />
          <textarea name="" id="" placeholder='Describe Your Product' className='form-control' required onChange={(e)=>SetProductdescription(e.target.value)}></textarea>
          <br />
          <input type="text" placeholder='Enter Product cost'className='form-control' required onChange={(e)=>SetProductcost(e.target.value)}/>
          <br />
          <h6>Upload Product photo</h6>
          <input type="file"
           className='w-100 form-control ' 
           accept='images/'
           required onChange={(e)=>SetProductPhoto(e.target.files[0])} />
          <br />
          <input type="submit" value="Upload Product" className='bg-info w-100 form-control text-white' />
          <br />

        </form>

       </div>
    </div>
  )
}

export default Addproducts