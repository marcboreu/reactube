
import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }


  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render(){
    
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              VIDEODETAIL
            </Grid>
            <Grid item xs={4}>
              VIDEOLIST
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  } 
}

export default App;