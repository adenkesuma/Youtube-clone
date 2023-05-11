// import package
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardMedia, Container } from '@mui/material'

// import component
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const channel = await fetchFromAPI(`channels?path=snippet&id=${id}`)
      setChannelDetail(channel?.items[0])

      const video = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(video?.items)
      
    }

    fetchResults()
  }, [id])

  return (
    <Container maxWidth="xl" sx={{ paddingTop: { xs: '140px', md: '92px' }}} >
      <Box minHeight="95vh">
        <Box mb={2} px={2}>
          <CardMedia
            image={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            alt="banner-image"
            sx={{ height: "300px", zIndex: 10, borderRadius: '12px' }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>

        <Box display="flex" justifyContent="center" p="2">
          <Box
            sx={{
              mr: { sm: "100px" },
            }}
          />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Container>
  );
}
