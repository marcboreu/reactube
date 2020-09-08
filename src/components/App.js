import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }


  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet' ,
        maxResults: 5,
        key: 'AIzaSyCcbL_ZByp1G_uOBwf9wmfZEM7_4qoBbxw',
        q: searchTerm,
      }
    })

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render(){
    
    return (
      <Grid 
        container
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <div>
              SEARCHBAR
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                VIDEODETAIL
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
              VIDEOLIST
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  } 
}

export default App;