import React from 'react'
import { results } from '../data/result'
import Cardd from '../components/Cardd'

function Contact() {
  return (
    <div>
      <div className='my'>
      {
        results.map((item) => (
          <Cardd key={item.id} data={item}/>
        ))
      }

      </div>
    </div>
  )
}

export default Contact