import React from 'react';
import '../index.css';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  handleSearch(term) {
    console.log(term);
  }
  
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar handleSearch={this.handleSearch} />
      </div>
    );
  }
}
