import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app"> //if using app in a subdirectory on a live server, 
      //server also needs to forward even if it dosent know the pages location
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
