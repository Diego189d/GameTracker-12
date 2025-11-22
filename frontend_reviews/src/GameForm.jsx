
import React, { useState } from 'react';

export default function GameForm(){
  const [name,setName]=useState('');
  const [platform,setPlatform]=useState('');
  const [review,setReview]=useState('');

  async function handleSubmit(){
    await fetch(import.meta.env.VITE_API_URL+'/games',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,platform,review})
    });
    setName('');setPlatform('');setReview('');
  }

  return(
    <div>
      <h2>Agregar Juego</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre"/>
      <input value={platform} onChange={e=>setPlatform(e.target.value)} placeholder="Plataforma"/>
      <textarea value={review} onChange={e=>setReview(e.target.value)} placeholder="Reseña"/>
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  )
}
