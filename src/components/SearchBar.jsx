import { Search} from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function SearchBar() {
  return (
    <Paper
        component='form'
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'nonee',
            mr: { sm: 5}
        }}
    >
        <input 
            style={{ border: 'none', outline: 'none'}}
            className='search-bar'
            placeholder='search...'
            value=''
            onChange={() => {}}
        />

        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
            <Search />
        </IconButton>
    </Paper>
  )
}
