// import package
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardMedia } from '@mui/material'

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
    <Box minHeight='95vh'>
      <Box>
        <CardMedia 
          image={channelDetail?.brandingSettings?.image?.bannerExternalUrl} 
          alt='banner-image'
          sx={{ height: '300px', zIndex: 10 }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' justifyContent='center' p='2'>
        <Box
          sx={{
            mr: { sm: '100px'}
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
