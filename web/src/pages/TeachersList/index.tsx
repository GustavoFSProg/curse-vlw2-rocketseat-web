import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader/Index'

export default function TeachersList() {
  return (  
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Venha dar aulas">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Matéria </label>
              <input type="text" id="subject"/>
              <label htmlFor="week-day">Dia da Semana </label>
              <input type="text" id="week-day"/>
              <label htmlFor="time">Hora </label>
              <input type="text" id="time"/>
            
            </div>
          </form>
        </PageHeader>
      </div>
    </>
  )
}
