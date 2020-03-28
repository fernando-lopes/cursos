import React from 'react'

export default _ => {
  const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

  const gerarItens = itens => {
    return itens.map(item =>
      <li key={aprovados.indexOf(item)}>{item}</li>
    )
  }
  return (
    <ul>
      {gerarItens(aprovados)}
    </ul>
  )
}