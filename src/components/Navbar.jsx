// import package & image
import { Container, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/SteamScape.png'

// import component
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
      <Container
        maxWidth="xl"
        sx={{ position: "fixed", backgroundColor: "#07031A", left: 0, right: 0 }}
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          px={2}
          pt='30px'
          pb='20px'
          sx={{
            margin: '0 auto',
            position: "sticky",
            background: "transparent",
            top: 0,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "14px" },
            zIndex: 999,
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={30} />
          </Link>
          <SearchBar />
        </Stack>
      </Container>
    );
}
