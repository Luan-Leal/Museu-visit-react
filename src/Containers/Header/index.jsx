import { useState } from 'react'

import "../../Style/global.css"
import "./index.css"

import Fachada from "../../assets/fachada.jpg"

export function Header() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <div className="header-img">
        <img src={Fachada} className='fachada' alt="Fachada do colegio academia" />
        <div className="info">
          <div className="horario">
            <div className="icon">
              <i className="fa-regular fa-clock"></i>
            </div>

          <h1>Horário</h1>
            <p>
              De segunda a sexta-feira, das 13h às 17h.
            </p>
            <p>
              Fechado sábados, domingos e feriados 
            </p>
          </div>
          
          <div className="contato">
            <div className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <h1>Onde estamos</h1>
            <p>Rua Halfeld, 1179 - Centro - CEP 36.016-000 - Juiz de Fora - MG</p>
            <p>
              <a href="https://www.google.com.br/maps/dir/-21.7757602,-43.3970179/UniAcademia+(CES%2FJF)+-+Campus+Academia+-+R.+Halfeld,+1.179+-+Centro,+Juiz+de+Fora+-+MG,+36016-000/@-21.7651847,-43.3798992,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x989b61e5bb4d59:0x8a1d7c0df90967f6!2m2!1d-43.3530921!2d-21.7625812" target="_blank"> 
              Check o Google Maps</a>
            </p>
          </div>
                      
          <div className="entrada">
            <div className="icon">
              <i className="fa-solid fa-ticket"></i>
            </div>
            <h1>Entrada</h1>
            <p>Entrada é <span>gratuita</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
