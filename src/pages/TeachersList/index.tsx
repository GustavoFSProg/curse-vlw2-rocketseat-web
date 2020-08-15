import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader/Index'
import TeachersItem, { Teatcher } from '../../components/TeacherItem'
import Select from '../../components/Select'
import api from '../../services/api'

interface id {
  id: number
}

export default function TeachersList() {
  const [teactchers, setTeatchers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekday] = useState('')
  const [time, setTime] = useState('')

  async function searchTeatchers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('/', {
      params: {
        week_day,
        subject,
        time,
      },
    })

    setTeatchers(response.data)

    console.log(response.data)
  }

  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponiveis!">
          <form id="search-teachers" onSubmit={searchTeatchers}>
            <div className="input-block">
              <label htmlFor="subject">
                <Select
                  id="sel"
                  name="subject"
                  value={subject}
                  label="Materia"
                  onChange={(e) => setSubject(e.target.value)}
                  options={[
                    { value: 'biologia', label: 'Biologia' },
                    { value: 'matematica', label: 'Matematica' },
                    { value: 'portugues', label: 'Portugues' },
                    { value: 'fisica', label: 'Fisica' },
                  ]}
                />
              </label>
              <div id="linha"> </div>
              <label htmlFor="week-day">
                <Select
                  name="week_day"
                  label="Dias da Semana"
                  onChange={(e) => setWeekday(e.target.value)}
                  value={week_day}
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
                <input
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                  type="time"
                  id="time"
                />{' '}
              </label>

              <button type="submit">
                <span>Buscar</span>
              </button>
            </div>
          </form>
        </PageHeader>
        <main>
          {teactchers.map((teactcher: Teatcher) => {
            return <TeachersItem key={teactcher.id} teatcher={teactcher} />
          })}
        </main>
      </div>
    </>
  )
}
