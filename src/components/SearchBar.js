import React from "react";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from "@material-ui/core";



class SearchBar extends React.Component {
  state = {
    termFromSearchBar: '',
  }

  handleChange = (event) => this.setState({termFromSearchBar: event.target.value });

  handleSubmit = (event) => {
    const { termFromSearchBar } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(termFromSearchBar);

    event.preventDefault();
  };

  render(){
    return(
      <Paper elevation={2} style={{ padding: "25px"}}>
        <form onSubmit={this.handleSubmit}>
            <TextField label="Buscar..." onChange={this.handleChange} />
            <IconButton type="submit" onSubmit={this.handleChange} aria-label="search">
              <SearchIcon />
            </IconButton>
        </form>
      </Paper>
    )
  }
}

export default SearchBar;

