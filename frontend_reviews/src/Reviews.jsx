
import React, { useState, useEffect } from 'react';

export default function Reviews(){
  const [games,setGames]=useState([]);

  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+'/games')
    .then(r=>r.json()).then(setGames);
  },[]);

  return(
    <div>
      <h2>Reseñas</h2>
      {games.filter(g=>g.review).map(g=>(
        <div key={g._id}>
          <h4>{g.name}</h4>
          <p>{g.review}</p>
        </div>
      ))}
    </div>
  )
}
