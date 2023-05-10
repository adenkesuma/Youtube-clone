// import package
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

// import components
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, LandingPage } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#07031A" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path="/feed/" exact element={<Feed />} />
          <Route path="/feed/video/:id" element={<VideoDetail />} />
          <Route path="/feed/channel/:id" element={<ChannelDetail />} />
          <Route path="/feed/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App
