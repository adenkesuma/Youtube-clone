// import package
import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
      }}
    >
      <input
        style={{ border: 'none', outline: 'none' }}
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton
        type='submit'
        sx={{ p: '8px', color: '#000000' }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
