import { useEffect, useState } from "react"
import Bloco from './../components/Bloco.jsx'

import Navbar from "../components/Navbar.jsx"

function Home() {
  const [array, setArray] = useState([
    'oi',
    'teste',
    'ola',
    '10',
    'coisas',
    true,
    10,
    20,
    50
  ])

  const [numeros, setNumeros] = useState(array.filter((e) => typeof (e) == 'number'))

  function isNumero(valor) {
    if (typeof valor === "number") return !isNaN(valor)
    if (typeof valor === "string") return valor.trim() !== "" && !isNaN(Number(valor))
    return false
  }

  useEffect(() => {
    setNumeros(array.filter((e) => {
      if (isNumero(e)) {
        return Number(e)
      }
    }));
  }, [array])

  const soma = (array) => {
    const sum = array.reduce((acumulador, atual) => acumulador + Number(atual), 0)
    return sum
  }

  const handleChange = (index, string) => {
    setArray(array.map((v, i) => (i === index ? string : v)))
  }



  return (
    <>
      <div className='w-full min-h-dvh
      flex
      flex-col justify-center items-center
      gap-10
      p-10
      '>

        {
          array.map((e, i) =>
            typeof (e) != 'boolean' ? <Bloco key={i} texto={e} setter={(s) => handleChange(i, s)} hasInput={true} /> :
              <Bloco key={i} texto="Esse bloco foi feito com a operação ternaria" hasInput={false} />
          )
        }

        <Bloco texto={"A soma dos numeros é " + soma(numeros)} hasInput={false} />

      </div>
    </>
  )

}

export default Home
