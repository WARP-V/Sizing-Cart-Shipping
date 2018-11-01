import React from 'react';
import axios from 'axios';
import Sizes from './Sizes';
import Description from './Description';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      description: '',
      shoeId: '310805-408',
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
        const sizes = response.data;
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
    const { description } = this.state;
    return (
      <div id="sizesAndDescription">
        <Sizes sizes={sizes} />
        <Description description={description} />
      </div>
    );
  }
}

export default App;
