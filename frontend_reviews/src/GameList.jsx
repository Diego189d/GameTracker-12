
import React, { useState, useEffect } from 'react';

export default function GameList(){
  const [games,setGames]=useState([]);

  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+'/games')
    .then(r=>r.json()).then(setGames);
  },[]);

  return(
    <div>
      <h2>Biblioteca</h2>
      {games.map(g=>(
        <div key={g._id}>
          <strong>{g.name}</strong> - {g.platform}
          <p>{g.review}</p>
        </div>
      ))}
    </div>
  )
}
