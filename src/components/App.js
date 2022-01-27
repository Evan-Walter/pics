import React from 'react';
import axios from 'axios';
import '../index.css';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  handleSearch(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID FkefCcB6TpHI654RjCohiAAQmoyI3gSxgHMK-w9vLWk',
      },
    });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar handleSearch={this.handleSearch} />
      </div>
    );
  }
}
