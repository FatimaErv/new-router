import React, {useState, useEffect} from 'react'

const API = "https://jsonplaceholder.typicode.com/photos"



function Service() {
  const [count, setCount] = useState(0)
  const [albums, setAlbums] = useState([])
  async function getAlbums() {
    try{
      const res = await fetch(API)
      const data = await res.json()
      console.log(data);
      setAlbums(data)
    }catch(error){
 console.log(error);

    }
    
  }

  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <div>
      
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>count</button>
      <div>
      {
        albums.splice(0, 20).map((item) => (
          <div key={item.id}>
   <img src={item.thumbnailUrl} alt="" />
   <h1>{item.title}</h1>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Service