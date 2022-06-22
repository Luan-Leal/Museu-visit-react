import { useState } from 'react'

import "./index.css"


function RedesSocais() {
  const [count, setCount] = useState(0)

  return (
    <section>
        <div className="redes-sociais">
            <h1>Visite as redes sociais do Museu Academia</h1>
            <div className="social-list">
                <div className="instagram"><i className="fa-brands fa-instagram"></i></div>
                <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                <div className="youtube"><i className="fa-brands fa-youtube"></i></div>
            </div>
        </div>
    </section>
  )
}

export default RedesSocais
