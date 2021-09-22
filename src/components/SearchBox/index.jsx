import React from 'react'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import '@material/react-text-field/dist/text-field.css'
import '@material/react-material-icon/dist/material-icon.css'

export function SearchBox({ value, setValue, handleKeyPress }) {
  return (
    <TextField
      outlined
      label='Pesquisar restaurantes'
      style={{ width: '100%' }}
      onTrailingIconSelect={value ? () => setValue('') : ''}
      trailingIcon={
        <MaterialIcon role='button' icon={`${!value ? 'search' : 'close'}`} />
      }
    >
      <Input
        value={value}
        onKeyPress={handleKeyPress}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextField>
  )
}
