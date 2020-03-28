import React from 'react'
import ReactDOM from 'react-dom'
//import MultiElementos from './components/MultiElementos'
//import PrimeiroComponente from './components/PrimeiroComponente'
//import CompA, { CompB as B} from './components/DoisComponentes'
//import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponentComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numeroInicial={100}/> */}
    {/* <ComponenteClasse valor="Sou um componente de classe" /> */}
    {/* <Pai /> */}
    {/* <ComponentComFuncao /> */}
    {/* <Familia sobrenome="Pereira">
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
    </Familia>
    <Familia sobrenome="Arruda">
      <Membro nome="Bia" />
      <Membro nome="Gustavo" />
    </Familia> */}

    {/* <FamiliaSilva /> */}
    {/* <MultiElementos/> */}
    {/* <PrimeiroComponente
      valor='Bom dia!'
      aBcD={Math.pow(2, 8)}
    /> */}
    {/* <CompA valor='Ola eu sou A'></CompA>
    <B valor='B na área'></B> */}
  </div>
  , rootElement)

//ReactDOM.render(<h1>Olá React</h1>, rootElement);