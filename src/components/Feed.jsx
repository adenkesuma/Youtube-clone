import { Box, Stack, Typography } from '@mui/material'
import { Videos, Sidebar } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useEffect, useState } from 'react';

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
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {/* sidebar */}
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* copyright */}
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
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory}
            <span style={{ color: "#FBD46D" }}> videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    );
}
