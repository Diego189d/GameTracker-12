import React, { useState } from 'react'
export default function GameForm({ onAdd }){
  const [name,setName] = useState(''); const [platform,setPlatform] = useState(''); const [status,setStatus] = useState('Pendiente')
  function submit(e){ e.preventDefault(); onAdd({ name, platform, status }); setName(''); setPlatform(''); setStatus('Pendiente') }
  return (
    <form onSubmit={submit} className="card">
      <h2>Agregar Juego</h2>
      <label>Nombre<input value={name} onChange={e=>setName(e.target.value)} required /></label>
      <label>Plataforma<input value={platform} onChange={e=>setPlatform(e.target.value)} /></label>
      <label>Estado<select value={status} onChange={e=>setStatus(e.target.value)}><option>Pendiente</option><option>Jugando</option><option>Completado</option></select></label>
      <button type="submit">Guardar</button>
    </form>
  )
}
