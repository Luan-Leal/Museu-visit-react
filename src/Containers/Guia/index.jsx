import { useState } from 'react'

import "./index.css"


export function Guia() {
  const [count, setCount] = useState(0)

  return (
    <section className="guia">
    <div className="guia-titulo">
        <h1>Guia de Visita</h1>
    </div>
    <div className="guia-paragrafo">
        <p>Seguindo as indicações da Prefeitura de Juiz de Fora (PJF), a partir desta quarta-feira, dia 8 de junho, volta a ser obrigatório o uso de máscaras em instituições de ensino. Logo, a partir dessa data, será exigido o uso de máscaras no UniAcademia, Colégio Academia e o Museu Universitário Academia. Isso vale para as salas de aula, laboratórios, banheiros, corredores e qualquer outro ambiente dos campus.
        </p>
        <p>A volta se dá após o crescimento do número de casos e de contaminações por Covid-19, confirmados pelo monitoramento do cenário epidemiológico.
        </p>    
        <p>Por isso, mantenha-se seguro com o uso da máscara cobrindo o rosto e do álcool em gel.</p>
    </div>
    </section>
  )
}

export default Guia
