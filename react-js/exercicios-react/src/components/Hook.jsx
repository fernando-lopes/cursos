import React, { useState, useEffect } from 'react'

export default props => {
  const [contador, setContador] = useState(100)
  const [state, setStatus] = useState('Par')

  useEffect(() => {
    setStatus(contador % 2 === 0 ? 'Par' : 'Impar')
  }, [contador])

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{state}</h3>
      <button onClick={() => setContador(contador - 1)}>Dec</button>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
    </div>
  )
}