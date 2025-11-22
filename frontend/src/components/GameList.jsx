import React from 'react'
export default function GameList({ games, onDelete, onUpdate }){
  if(!games.length) return <div className="card"><p>No hay juegos en la biblioteca</p></div>
  return (<div>{games.map(g=>(<div key={g._id} className="card"><h3>{g.name}</h3><p>{g.platform} — <i>{g.status}</i></p><div className="actions"><button onClick={()=> onDelete(g._id)}>Eliminar</button><button onClick={()=> onUpdate(g._id, { status: g.status==='Pendiente'?'Jugando':'Completado' })}>Cambiar estado</button></div></div>))}</div>)
}
