import { useState } from "react"
import Formulario from "./components/Formulario/Formulario"
import styles from './App.module.scss'
import Titulo from "./components/Titulo/Titulo"
import Resultados from "./components/Resultados/Resultados"

function App() {

  const irpf = 0.275
  const economia = 0.1133
  const judicial = 0.16
  const meses = 12
  const [resIrpf, setResIrpf] = useState(0)
  const [resEconomia, setResEconomia] = useState(0)
  const [custo, setCusto] = useState(0)
  const [avaliacao, setAvaliacao] = useState(0)
  const [alguel, setAluguel] = useState(0)
  const [resultado, setResuldado] = useState(false)


  const handleSubmit = ( avaliacao: string, alguel: string ) => {
    setAvaliacao( parseInt(avaliacao, 10) )
    setAluguel(parseInt(alguel, 10) )
    setResIrpf( parseInt(alguel, 10)*irpf*meses )
    setResEconomia( parseInt(alguel, 10)*economia*meses )
    setCusto( parseInt(avaliacao, 10)*judicial )
    setResuldado(true)
  }

  const handleBack = () => {
    setResuldado(false)
  }

  return (
    <div className={styles.app}>
      <Titulo>Simulador de economia</Titulo>
      
      {resultado 
        ? <Resultados avaliacao={avaliacao} aluguel={alguel} economia={resEconomia} irpf={resIrpf} custo={custo} handleBack={handleBack} /> 
        : <Formulario handleSubmitParent={handleSubmit}/>
      }
    </div>
  )
}

export default App
