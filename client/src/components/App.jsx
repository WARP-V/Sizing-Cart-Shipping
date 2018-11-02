import React from 'react';
import axios from 'axios';
import Sizes from './Sizes';
import Description from './Description';

const _ = require('lodash');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      defaultSizes: _.chunk([7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18], 5),
      description: '',
      shoeId: '310805-408',
    };
  }

  componentDidMount() {
    this.getSizes();
    this.getDescription();
  }

  sortSizes(a, b) {
    return a - b;
  }

  getSizes() {
    const { shoeId } = this.state;
    axios.get(`/sizes/${shoeId}`)
      .then((response) => {
        let sizes = response.data;
        //console.log("sizes:", sizes)
        sizes = sizes.sort(this.sortSizes);
        console.log('sizes.sort', sizes);
        this.setState({ sizes });
      });
  }

  getDescription() {
    const { shoeId } = this.state;
    axios.get(`/description/${shoeId}`)
      .then((response) => {
        const description = response.data;
        this.setState({ description });
      });
  }

  render() {
    const { sizes } = this.state;
    console.log("SIZES", sizes);
    const { description } = this.state;
    const { defaultSizes } = this.state;
    return (
      <div id="sizesAndDescription">
        <Sizes sizes={sizes} defaultSizes={defaultSizes}/>
        <Description description={description} />
      </div>
    );
  }
}

export default App;
