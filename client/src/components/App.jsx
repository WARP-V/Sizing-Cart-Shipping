import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Sizes from './Sizes.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      description: '',
      shoeId: '310805-408'
    };
  }

  componentDidMount() {
    this.getSizes();
    this.getDescription();
  }

  getSizes() {
    const { shoeId } = this.state;
    axios.get(`/sizes/${shoeId}`)
      .then((response) => {
        let sizes = response.data;
        this.setState({ sizes });
      });
  }

  getDescription() {
    const { shoeId } = this.state;
    axios.get(`/description/${shoeId}`)
      .then((response) => {
        let description = response.data;
        this.setState({ description });
      });
  }

  render() {
    return (
      <div id="sizesAndDescription">
        <Sizes sizes={this.state.sizes}/>
        <Description description={this.state.description}/>        
      </div> 
    );
  }
};

export default App;