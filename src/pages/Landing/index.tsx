import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import imagemLanding from '../../assets/images/landing.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import study from '../../assets/images/icons/study.svg'
import './styles.css'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import api from '../../services/api'

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <img src={imagemLanding} alt="landing-img" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={giveClasses} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={study} alt="study-icon" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-conections">
          Total de {totalConnections} conexoes já realizadas!
          <img src={purpleHeartIcon} alt="heart-icon" />
        </span>
      </div>
    </div>
  )
}
