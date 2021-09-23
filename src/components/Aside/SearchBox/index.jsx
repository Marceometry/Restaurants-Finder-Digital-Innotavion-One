import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import '@material/react-text-field/dist/text-field.css'
import '@material/react-material-icon/dist/material-icon.css'

export function SearchBox({ setQuery }) {
  const [value, setValue] = useState('')

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      setQuery(value)
    }
  }

  return (
    <TextField
      outlined
      label='Pesquisar restaurantes'
      style={{ width: '100%' }}
      onTrailingIconSelect={value ? () => setQuery(value) : ''}
      trailingIcon={<MaterialIcon role='button' icon='search' />}
    >
      <Input
        value={value}
        onKeyPress={handlePressEnter}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextField>
  )
}
