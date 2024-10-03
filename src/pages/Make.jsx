import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import apiClient from '../axios/apiClient';




function Make() {
  const [examples, setExamples] = useState([])
async function getExample() {
    try {
        const res = await apiClient.get("/example")

        console.log(res);
        setExamples(res.data)
        
    } catch (error) {
        console.log(error);
        
    }
    
}
useEffect(() => {getExample()}, [])


  return (
    <div>
       <Link to="/create-example" className='proo'> 
          <button>Create Products</button>
        
        </Link>
      {
        examples.map((item) => (
          <div key={item.id}>
            <img src={item.images} alt="" />
            <h1>{item.slug}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Make
