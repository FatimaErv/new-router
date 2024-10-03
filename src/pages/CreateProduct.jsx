import React, {useState} from 'react'
import apiClient from '../axios/apiClient'
import "./main.css"

function CreateProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [image, setImage] = useState("")

 async function sendProduct() {
    const payload = {
    title: title,
    price: price,
    discount: discount,
    image: image
    }
    try {
        const res = await apiClient.post("/products", payload)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
 }

  return (
    <div className='main'>
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Title' type="text" />
      <input value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' type="number" />
      <input value={discount} onChange={(event) => setDiscount(event.target.value)} placeholder='Discount' type="number" />
      <input value={image} onChange={(event) => setImage(event.target.value)} placeholder='Image' type="text" />
      <button onClick={() => sendProduct()}>Create</button>
    </div>
  )
}
export default CreateProduct
