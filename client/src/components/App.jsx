import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Sizes from './Sizes.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      description: ''
    };
  }

  render() {
    return (
      <div>Rendering App Component
        
      </div> 
    );
  }
};

export default App;