// import package
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

// import component
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

export default function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#ffffff' }}>
        Search Result for:
        <span style={{ color: '#FBD46D' }}> {searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
