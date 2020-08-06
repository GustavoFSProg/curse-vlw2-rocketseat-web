import React from 'react'
import PageHeader from '../../components/PageHeader/Index'
import Input from '../../components/Input'
import warning from '../../assets/images/icons/warning.svg'

import './styles.css'

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
            <Input name="subject" label="Nome Completo" />
          </div>
          <div className="input-block">
            <Input name="avatar" label="Foto" />
          </div>

          <div className="input-block">
            <Input name="whatsapp" label="Whatsapp" />
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
            <img src={warning} alt="Aviso Importante!" />
            Importante! <br />
            Preencha todos os dados
            <button type="submit">Salvar os dados</button>
          </p>
        </footer>
      </main>
    </div>
  )
}
