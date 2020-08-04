import React from 'react'
import gustavo from '../../assets/Gustavo.jpg'
import wathsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeachersItem() {
  return (
    <article className="teatcher-item">
      <header>
        <img src={gustavo} alt="Gustavo"></img>
        <div>
          <strong>Gustavo Sohne</strong>
          <span> Bateria </span>
        </div>
      </header>

      <p>
        Entusiasta de Technicas de bateria onde a musica importa Entusiasta de{' '}
        <br />
        Technicas de bateria <br />
        onde a musica importa
      </p>

      <footer>
        <p>Preço por Hora</p>
        <strong> R$ 50,00</strong>

        <button type="button">
          <img src={wathsapp} alt="contato" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeachersItem
