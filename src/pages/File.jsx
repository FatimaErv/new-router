import React, {useState, useEffect} from 'react'
import "./file.css"

const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

function File() {
   const [meal, setMeal] = useState([])
   async function getMeals() {
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        setMeal(data.meals)
    } catch (error) {
        console.log(error);
        
    }
    
   }
  useEffect(() => {
    getMeals()
  }, [])

  return (
    <div className='meals'>
        {
            meal?.map((item) => (
                <div key={item.id} className='meal'>
                    <img src={item.strMealThumb} alt="" />
                    <h1>{item.strCategory}</h1>
                </div>
             ))
        }
    </div>
  )
}


export default File