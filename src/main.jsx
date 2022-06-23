import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Containers/Header/index"
import Guia from "./Containers/Guia"
import RedesSocais from "./Containers/Redes-Sociais"

import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <section className='container'>
      <Header />
      <Guia />
      <RedesSocais />

    </section>

  </React.StrictMode>
)
