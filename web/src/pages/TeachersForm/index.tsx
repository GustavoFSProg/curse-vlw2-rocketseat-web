import React from 'react'
import PageHeader from '../../components/PageHeader/Index'
import Input from '../../components/Input'
import warning from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

export default function TeachersForm() {
  return (
    <div id="page-teatcher-form">
      <PageHeader
        title="É incrível voce das aulas!"
        description="O primeiro passo é prencher este formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados: </legend>

          <div className="input-block">
            <Input name="name" label="Nome Completo" />
          </div>
          <div className="input-block">
            <Select
              name="subject"
              label="Materia"
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
            <Input name="avatar" label="Foto" />
          </div>

          <div className="input-block">
            <Input name="whatsapp" label="Whatsapp" />
          </div>

          <div className="input-block">
            <Textarea label="Biografia" name="bio" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula: </legend>
          <div className="input-block">
            <Input name="subject" label="Materia" />
          </div>
          <div className="input-block">
            <Input name="cost" label="Custo da Hora por aula " />
          </div>
        </fieldset>

        <footer>
          <p>
            <span id="centro">
              <img src={warning} alt="Aviso Importante!" />

              <span> Importante! Preencha todos os dados</span>
            </span>
            <span id="brake-line">
              <button type="submit">Salvar Cadastro</button>
            </span>
          </p>
        </footer>
      </main>
    </div>
  )
}
