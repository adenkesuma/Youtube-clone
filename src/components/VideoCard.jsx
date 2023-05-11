// import package
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import PropTypes from 'prop-types'

// import component
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
    }) {
  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        width: { xs: '90vw', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: '10px',
        backdropFilter: 'blur(9.9px)',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180, borderRadius: '10px 10px 0 0' }}
        />
      </Link>

      <CardContent
        sx={{
          height: '106px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: 14, color: 'gray', ml: '5px', mb: '-2px' }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

VideoCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.shape({
            videoId: PropTypes.string.isRequired
        }).isRequired,
        snippet: PropTypes.shape({
            channelId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            channelTitle: PropTypes.string.isRequired,
            thumbnails: PropTypes.shape({
                high: PropTypes.shape({
                    url: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        })
    })
}
