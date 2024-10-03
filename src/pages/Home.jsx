import React from 'react'
import { products } from '../data/product'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <div className='my'>
      {
        products.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>    
    </div>
  )
}

export default Home
