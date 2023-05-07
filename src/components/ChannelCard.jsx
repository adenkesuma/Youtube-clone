import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import PropTypes from 'prop-types'

export default function ChannelCard({ channelDetail }) {
    return (
      <Box 
        sx={{ 
            boxShadow: "none", 
            borderRadius: 0 ,
            width: { xs: '356px', md:'320px' },
            height: { xs: '300px', md: '285px' },
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Link
          to={`/channel/${channelDetail?.id?.channelId}`}
          sx={{ textDecoration: "none" }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={`${channelDetail?.snippet?.thumbnails?.high?.url}`}
              alt={`${channelDetail?.snippet?.title}`}
              sx={{
                borderRadius: "50%",
                width: "180px",
                height: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle
                sx={{ fontSize: 14, color: "gray", ml: "5px", mb: "-2px" }}
              />
            </Typography>

            {channelDetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    );
}

ChannelCard.propTypes = {
    channelDetail: PropTypes.shape({
        id: PropTypes.shape({
            channelId: PropTypes.string.isRequired,
        }).isRequired,
        snippet: PropTypes.shape({
            title: PropTypes.string.isRequired,
            thumbnails: PropTypes.shape({
                high: PropTypes.shape({
                    url: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        }).isRequired,
        statistics: PropTypes.shape({
            subscriberCount: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};
