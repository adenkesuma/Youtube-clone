// import package
import { Box, Stack, Typography, CardMedia } from '@mui/material'
import { useEffect, useState } from 'react';
import BannerImage from '../assets/banner-image.jpg'

// import component
import { Videos, Sidebar } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => {
            setVideos(data.items)
        })
    }, [selectedCategory])

    return (
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        {/* sidebar */}
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Typography
            className='copyright'
            variant='body2'
            sx={{
              mt: 1.5,
              color: '#fff',
              display: { xs: 'none', md: 'block' },
            }}
          >
            Copyright 2023 Aden Tried Coding
          </Typography>
        </Box>

        {/* content */}
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <CardMedia component='image' image={BannerImage} alt='banner image' height='160px' width='100%' />
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            {selectedCategory}
            <span style={{ color: '#FBD46D' }}> videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    )
}
