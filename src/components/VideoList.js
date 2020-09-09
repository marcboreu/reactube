import React from "react";
import { Grid } from "@material-ui/core";


const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video, id) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={id}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {renderedVideos}
    </Grid>
  );
}

export default VideoList;