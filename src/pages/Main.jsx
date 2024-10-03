import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./main.css"
import { Link } from 'react-router-dom';
import apiClient from '../axios/apiClient';

const API = "https://668cb756099db4c579f00b64.mockapi.io/products"

function Main() {
    const [products, setProducts] = useState([])
    const [activ, setActiv] = useState(false)

    async function getProducts() {
        try {
            const res = await apiClient.get("/products")

            console.log(res);
            setProducts(res.data)
          
        } catch (error) {
            console.log(error);
            
        }
        
    }
    useEffect(() => {getProducts()}, [activ])


  async function deleteProducts(id) {
    try {
        const res = await apiClient.delete(`/products/ ${id}`)

        console.log(res);
        console.log(!activ);
        
        
    } catch (error) {
        console.log(error);
        
    }
    
  }




  return (
    <div>
        <Link to="/create-product" className='proo'> 
          <button>Create Products</button>
        
        </Link>
        <div className='product-1'>
        {
        products?.map((item) => (
            <div key={item.id}>
                 <h1>{item.title}</h1>
                 <img src={item.image} alt="" />
                 <button onClick={() => deleteProducts(id)}>Delete</button>
                </div>
           
        ))
      }
        </div>
    </div>
  )
}

export default Main
