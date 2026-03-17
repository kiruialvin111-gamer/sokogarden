import React from 'react'
import { useState,useEffect } from 'react'

import axios from 'axios'



const Getproducts = () => {

// initializing your hooks
  
  const[loading,SetLoading]=useState("")
  const[error,SetError]=useState("")
  const[products,SetProducts]=useState([])


// a variable to store our images
  const img_url="http://kiruialvin.alwaysdata.net/static/images/"

  // a function to fetch or get products from the api
  const fetchproducts=async()=>{

  try {
    SetLoading("please wait as we retrieve your products")

    // call your Api

    const response=await axios.get("http://kiruialvin.alwaysdata.net/api/getproductdetails")


    SetProducts(response.data)
    console.log("The response is",response)
    SetLoading("")
    
  } catch (error) {
    SetLoading("")
    SetError(error.message)

  }
  }
  // end of the fetch function where we call our useEffect

  useEffect(()=>{
    fetchproducts()
  },[])
  return (
    <div className='row'> 
      <h1>Available products</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>
{/*  mapping through the products */}
      {products.map((product)=>(

      




      <div className='col-md-3 justify-content-center '>
        <div className='card shadow mt-3  '>
          <img src={img_url + product.product_photo } alt="" className='product_img'/>

          <div className='card-body'>
            <h3 className='text-success'>{product.product_name}</h3>
            <p className='text-secondary'>{product.product_description}</p>
            <b className='text-info'>{product.product_cost}</b>


            <br />
            <input type="button"  value="Make Payments" className='btn btn-info w-100'/>
          </div>

        </div>

      </div>
))}
        
    </div>
  )
}

export default Getproducts