import React, {useState}  from 'react'
import apiClient from '../axios/apiClient'





function CreateExample() {
    const [slug, setSlug] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    async function sendExample() {
        const payload ={
            slug: slug,
            price: price,
            images: image
        }
        try {
            const res = await apiClient.post("/example", payload)
            console.log(res);
            
        } catch (error) {
            console.log(error);

            
            
        }
        
    }
  return (
    <div>
        <input placeholder='slug' onChange={() => setSlug()} type="text" />
        <input placeholder='price' onChange={() => setPrice()} type="text" />
        <input placeholder='image' onChange={() => setImage()} type="text" />
      <button onClick={() => sendExample()}>Create</button>

      
    </div>
  )
}

export default CreateExample
