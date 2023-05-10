// import package & image
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/SteamScape.png'

// import component
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
      <Stack
        justifyContent='space-between'
        alignItems='center'
        p={2}
        sx={{ position: 'sticky', background: '#07031A', top: 0, flexDirection: { xs: 'column', sm: 'row'}, gap: { xs: '14px'}, zIndex: 999 }}
      >
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt='logo' height={30} />
        </Link>

        <SearchBar />
      </Stack>
    );
}
