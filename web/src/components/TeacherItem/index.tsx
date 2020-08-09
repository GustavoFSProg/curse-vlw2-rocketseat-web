import React from 'react'
// import gustavo from '../../assets/Gustavo.jpg'
import wathsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'
export interface Teatcher {
  id: number
  name: string
  avatar: string
  bio: string
  cost: number
  whatsapp: string
  subject: string
}
interface TeatcherItemProps {
  teatcher: Teatcher
}

const TeachersItem: React.FC<TeatcherItemProps> = ({ teatcher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teatcher.id,
    })
  }

  return (
    <article className="teatcher-item">
      <header>
        <img src={teatcher.avatar} alt="teatcher.avatar"></img>
        <div>
          <strong>{teatcher.name}</strong>
          <span> {teatcher.subject} </span>
        </div>
      </header>

      <p>
        {teatcher.bio} <br />
      </p>

      <footer>
        <p>Preço por Hora</p>
        <strong> R$ {teatcher.cost}</strong>

        <a
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teatcher.whatsapp} `}
        >
          <img src={wathsapp} alt="contato" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  )
}

export default TeachersItem
