import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import PropTypes from 'prop-types'

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {

  return (
    <Card sx={{ width: { xs: '90vw', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px', mb: '-2px' }} />
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
