import React, { useState } from 'react'
import {  useLocation } from 'react-router-dom'
import axios from 'axios'

const Mpesapayments = () => {

  const[loading,SetLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,SetError]=useState("")

  const[phone,SetPhone]=useState("")

  // receiving the parsed data from getproducts
  const{product}=useLocation().state || {}

  const img_url=("http://kiruialvin.alwaysdata.net/static/images/")

    const submit = async (e) => {
    e.preventDefault()
    SetLoading("Please wait...")

    try {
      const data = new FormData()
      data.append("amount", product.product_cost)
      data.append("phone", phone)

      const response = await axios.post(
        "http://kiruialvin.alwaysdata.net/api/mpesa_payment",
        data
      )

      SetLoading("")
      setSuccess(response.data.message)

    } catch (error) {
      SetLoading("")
      SetError(error.message)
    }
  }


return (
    <div className='row justify-content-center'>
        <h1>MAke payments-Lipa na mpesa</h1>
        <p className='text-success'>{product.product_name}</p>
        <p className='text-warning'>{product.product_cost}</p>
        <p className='text-secondary'>{product.product_description}</p>


        <div className='card shadow col-md-6'>
<br />
          <form action="" onSubmit={submit} >

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

            
          <input
            type="tel"
            className='form-control'
            placeholder='enter phone starting with 254'
            onChange={(e) => SetPhone(e.target.value)}
            value={phone}
            required
          />

            <br />

            {/* <input id='' type="submit" value={'Make payment'} className='w-100 form-control' onClick={(e)=>navigate(e.target.value)}/> */}


            <input
            id='buybtn'
            type="submit"
            value={'Purchase now'}
            className='w-100 form-control btn btn-info'
          />
            <br />
            <br />




          </form>


        </div>


    </div>
  )
}


export default Mpesapayments