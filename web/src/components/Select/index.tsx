import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({ label, options, name, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select defaultValue="" id={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {' '}
                {option.label}
              </option>
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default Select
