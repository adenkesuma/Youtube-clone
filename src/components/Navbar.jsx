import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
// import logo from '../assets/logo.png'
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            p={2}
            sx={{ position: 'sticky', background: '#000', top: 0}}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45} />
            </Link>

            <SearchBar />
        </Stack>
    )
}
