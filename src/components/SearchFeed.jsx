import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

export default function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Result for: 
          <span style={{ color: "#f31503" }}> {searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
  )
}
