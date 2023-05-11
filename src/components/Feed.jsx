// import package
import { Box, Stack, Typography, Container } from '@mui/material'
import { useEffect, useState } from 'react';

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
      <Container maxWidth="xl" sx={{ paddingTop: { xs: '120px', md: '84px' }}} >
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }, marginTop: 2 }}>
          {/* sidebar */}
          <Box
            sx={{
              height: { sx: "auto", md: "90vh" },
              borderRight: { xs: 'none', md: "1px solid #3d3d3d" },
              paddingRight: { sx: 0, md: 6 },
              paddingLeft: { sx: 0, md: 2 },
            }}
          >
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Typography
              className="copyright"
              variant="body2"
              sx={{
                mt: 1.5,
                color: "#fff",
                display: { xs: "none", md: "block" },
              }}
            >
              Copyright 2023 Aden Tried Coding
            </Typography>
          </Box>

          {/* content */}
          <Box
            p={2}
            sx={{
              overflowY: "auto",
              height: "91vh",
              flex: 2,
              marginLeft: { md: 4 },
            }}
          >
            <Stack sx={{ marginBottom: "60px", marginTop: { xs: '50px', md: '10px'} }}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "50px",
                    color: "#ffffff",
                    fontWeight: "600",
                    marginBottom: "10px",
                    lineHeight: "66px",
                  }}
                >
                  Enjoy Thousands of <br />{" "}
                  <span style={{ color: "#FBD46D" }}>Videos</span> at No Cost
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "16px", color: "#ffffff", fontWeight: "400" }}
                >
                  Discover Your Favorite Movies, TV Shows, <br /> and More with
                  Free Video Streaming
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="h4"
              fontSize="28px"
              fontWeight="500"
              mb={2}
              sx={{ color: "white" }}
            >
              {selectedCategory}
              <span style={{ color: "#FBD46D" }}> videos</span>
            </Typography>
            <Videos videos={videos} />
          </Box>
        </Stack>
      </Container>
    );
}
