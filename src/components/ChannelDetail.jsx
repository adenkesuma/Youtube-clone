import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
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
        <div 
          style={{
            background: 'linear-gradient(90deg, rgba(231,255,0,1) 0%, rgba(0,255,252,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
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
