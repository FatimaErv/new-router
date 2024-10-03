import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/product'
import "./productDetail.css"

function ProductDetail( ) {
    const {id} = useParams();

    const findProduct = products.find((item) => item.id == id)

    const [title, setTitle] = useState('Ariet')
    const [catigory, setCatigory] = useState("NIKE")
    const [photo, setPhoto] = useState(findProduct.image)

    function changeTitle() {
    if(title== "Ariet") {
      setTitle("Kutya")
    } else {
      setTitle("Ariet")
    }
    }


  return (
    <div className='detail'> 
      {id}
      <img src={photo} alt="" />
      <div className='detail-content'>
      <h2>{findProduct.title}</h2>
      <h2>{findProduct.price}$</h2>
      <p>{findProduct.description}</p>
      </div>
     <div className='detail-images'>
     {
          findProduct.images.map((item) =>(
            <img onClick={() => setPhoto(item)} src={item} alt="" />
          ))
      }
     </div>
    {title}
    <button onClick={() =>changeTitle()}>Send</button>
    {catigory}
    <button onClick={() => setCatigory("AMAZON") }>Click</button>

    </div>
  )
}

export default ProductDetail
