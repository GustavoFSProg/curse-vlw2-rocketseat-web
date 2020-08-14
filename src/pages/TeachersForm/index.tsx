import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/Index'
import Input from '../../components/Input'
import warning from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'

export default function TeachersForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const history = useHistory()

  const [name, setName] = useState('')
  const [materia, setMateria] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, position) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(updateScheduleItems)
  }

  function createClass(e: FormEvent) {
    e.preventDefault()

    api
      .post('/classes', {
        name,
        avatar,
        bio,
        whatsapp,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        history.push('/')
        return alert('Cadastro Realizado com sucesso!')
      })
      .catch(() => {
        return alert('Erro no cadastro!!')
      })
  }

  return (
    <div id="page-teatcher-form">
      <PageHeader
        title="É incrível voce das aulas!"
        description="O primeiro passo é prencher este formulario de inscrição"
      />

      <main>
        <form onSubmit={createClass}>
          <fieldset>
            <legend>Seus Dados: </legend>

            <div className="input-block">
              <Input
                name="name"
                label="Nome Completo"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="input-block">
              <Select
                name="subject"
                label="Materia"
                value={materia}
                onChange={(e) => {
                  setMateria(e.target.value)
                }}
                options={[
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Matematica', label: 'Matematica' },
                  { value: 'Portugues', label: 'Portugues' },
                  { value: 'Fisica', label: 'Fisica' },
                ]}
              />
            </div>
            <br />
            <div className="input-block">
              <Input
                name="avatar"
                label="Foto"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value)
                }}
              />
            </div>

            <div className="input-block">
              <Input
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value)
                }}
              />
            </div>

            <div className="input-block">
              <Textarea
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value)
                }}
                label="Biografia"
                name="bio"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula: </legend>
            <div className="input-block">
              <Input
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value)
                }}
                name="subject"
                label="Materia"
              />
            </div>
            <div className="input-block">
              <Input
                name="cost"
                label="Custo da Hora por aula "
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value)
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button
                type="submit"
                className="btn"
                onClick={addNewScheduleItem}
              >
                + Novo Horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                    name="subject"
                    label="Dias da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'week_day', e.target.value)
                    }
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
                  <div className="input-block">
                    <Input
                      onChange={(e) =>
                        setScheduleItemValue(index, 'from', e.target.value)
                      }
                      value={scheduleItem.from}
                      name="from"
                      label="Das"
                      type="time"
                    />
                  </div>
                  <div className="input-block">
                    <Input
                      onChange={(e) =>
                        setScheduleItemValue(index, 'to', e.target.value)
                      }
                      value={scheduleItem.to}
                      name="to"
                      label="Ate"
                      type="time"
                    />
                  </div>
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <div id="centro">
                <img src={warning} alt="Aviso Importante!" />

                <span> Importante! Preencha todos os dados</span>
              </div>
              <div id="brake-line">
                <button type="submit">Salvar Cadastro</button>
              </div>
            </p>
          </footer>
        </form>
      </main>
    </div>
  )
}
