import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> f123ba2320a2a2ac473feff6d1643129790e19a7
import $ from 'jquery';
import Sizes from './Sizes.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
<<<<<<< HEAD
      description: '',
      shoeId: '310805-408'
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
        console.log(response);
        let sizes = response.data;
        console.log(sizes);
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
      <div id="sizesAnddescription">
        <Sizes sizes={this.state.sizes}/>
        <Description description={this.state.description}/>        
=======
      description: ''
    };
  }

  render() {
    return (
      <div>Rendering App Component
        
>>>>>>> f123ba2320a2a2ac473feff6d1643129790e19a7
      </div> 
    );
  }
};

export default App;