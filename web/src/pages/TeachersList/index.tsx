import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader/Index'
import TeachersItem from '../../components/TeacherItem'

export default function TeachersList() {
  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponiveis!">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">
                Matéria
                <input type="text" id="subject" />
              </label>
              <div id="linha"> </div>
              <label htmlFor="week-day">
                Dia da Semana
                <input type="text" id="week-day" />
              </label>
              <div id="linha"> </div>
              <label htmlFor="time">
                Hora
                <input type="time" id="time" />{' '}
              </label>
            </div>
          </form>
        </PageHeader>

        <main>
          <TeachersItem />
          <TeachersItem />
          <TeachersItem />
          <TeachersItem />
          <TeachersItem />
          <TeachersItem />
        </main>
      </div>
    </>
  )
}
