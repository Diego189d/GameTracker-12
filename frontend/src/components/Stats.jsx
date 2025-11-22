import React from 'react'
export default function Stats({ games }){
  const total = games.length; const pend = games.filter(g=>g.status==='Pendiente').length; const jugando = games.filter(g=>g.status==='Jugando').length; const comp = games.filter(g=>g.status==='Completado').length
  return (<div className="card"><h2>Estadísticas</h2><p>Total: {total}</p><p>Pendiente: {pend}</p><p>Jugando: {jugando}</p><p>Completado: {comp}</p></div>)
}
