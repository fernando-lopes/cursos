import React from 'react'

let isLegal = true

export default (props) =>
  <div>
    <h1>{props.valor}</h1>
    <h2>{1 + 1}</h2>
    <p>{isLegal ? 'Sim' : 'Não'}</p>
    <p>{Math.random(2, 3)}</p>
  </div>


// export default function() {
//   return <h1>Primeiro Componente!</h1>;
// }