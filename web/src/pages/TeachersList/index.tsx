import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader/Index'
import TeachersItem from '../../components/TeacherItem'
import Select from '../../components/Select'

export default function TeachersList() {
  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponiveis!">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">
                <Select
                  id="sel"
                  name="subject"
                  label="Materia"
                  options={[
                    { value: 'Biologia', label: 'Biologia' },
                    { value: 'Matematica', label: 'Matematica' },
                    { value: 'Portugues', label: 'Portugues' },
                    { value: 'Fisica', label: 'Fisica' },
                  ]}
                />
              </label>
              <div id="linha"> </div>
              <label htmlFor="week-day">
                <Select
                  name="subject"
                  label="Dias da Semana"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda' },
                    { value: '2', label: 'Terça' },
                    { value: '3', label: 'Quarta' },
                    { value: '4', label: 'Quinta' },
                    { value: '5', label: 'Sexta' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
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
