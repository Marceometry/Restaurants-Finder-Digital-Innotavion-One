import React, { useState } from 'react'
import { StyledSearchBox } from './styles'
import logo from '../../assets/logo.svg'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import '@material/react-text-field/dist/text-field.css'
import '@material/react-material-icon/dist/material-icon.css'

export function SearchBox() {
  const [value, setValue] = useState('')

  return (
    <StyledSearchBox>
      <img src={logo} alt='Logo' />
      <TextField
        outlined
        label='Pesquisar'
        trailingIcon={<MaterialIcon role='button' icon='search' />}
      >
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </TextField>
    </StyledSearchBox>
  )
}
