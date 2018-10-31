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

  componentDidMount() {
    this.getSizes();
    this.getDescription();
  }

  getSizes() {
    let { shoeId } = this.state;
    axios.get(`/sizes/${shoeId}`)
      .then((response) => {
        let sizes = response.data;
        this.setState({ sizes });
      });
  }

  getDescription() {
    let { shoeId } = this.state;
    axios.get(`/description/${shoeId}`)
      .then((response) => {
        let description = response.data;
        this.setState({ description });
      });
  }

  render() {
    return (
      <div>Rendering App Component
        
      </div> 
    );
  }
};

export default App;