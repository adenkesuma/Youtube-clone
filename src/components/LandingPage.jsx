// import package
import { Box, CardMedia, Stack, Typography } from '@mui/material'

// import component
import bannerImage from '../assets/banner-image.jpg'

export default function LandingPage() {
  return (
    <Box>
      <Stack
        mt={1}
        height="90vh"
        width="100%"
        flexDirection="row"
        justifyContent="center"
      >
        <Box width="35%" height="90vh" sx={{ background: "#1a1a1a" }}>
          <Typography
            variant="subtitle2"
            mt={6}
            ml={6}
            sx={{
              letterSpacing: "10px",
              fontWeight: "500",
              fontSize: "10px",
              color: "#ffffff",
            }}
          >
            STEA <br />
            MSPA <br />
            CE
          </Typography>
          <Typography
            mt={12}
            ml={6}
            variant="h1"
            sx={{
              fontSize: "34px",
              fontWeight: "500",
              color: "#ffffff",
              lineHeight: "50px",
            }}
          >
            Watch All Your Favorite Videos
            <span style={{ color: "#FBD46D" }}> Without Paying</span> a Dime
          </Typography>
        </Box>
        <Box width="65%" height="90vh">
          <CardMedia
            image={bannerImage}
            alt="background image"
            sx={{
              width: "100%",
              height: "90vh",
              borderRight: "12px solid #07031A",
              borderLeft: "12px solid #07031A",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
