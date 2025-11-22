
import React, { useState } from 'react';
import GameForm from './GameForm';
import GameList from './GameList';
import Reviews from './Reviews';

export default function App(){
  const [view,setView]=useState('add');

  return (
    <div>
      <nav>
        <button onClick={()=>setView('add')}>Agregar Juego</button>
        <button onClick={()=>setView('list')}>Biblioteca</button>
        <button onClick={()=>setView('reviews')}>Reseñas</button>
      </nav>

      {view==='add' && <GameForm/>}
      {view==='list' && <GameList/>}
      {view==='reviews' && <Reviews/>}
    </div>
  );
}
