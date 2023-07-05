import { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material'
import { Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router-dom"

const SearchFeed = () => {

  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setvideos(data.items))

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed