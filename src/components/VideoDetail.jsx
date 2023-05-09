import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet, statistic&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail?.snippet) return 'Loading...'

  const {
    snippet: {
      title, channelId, channelTitle
    },
    statistics: {
      viewCount, likeCount
  }
  } = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#ffffff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack justifyContent='space-between' direction='row' sx={{ color: '#fff' }} px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
                <Typography sx={{ color: '#fff' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '10px' }} />
                </Typography>
              </Link>
              <Stack flexDirection='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views                  
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes                 
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}
