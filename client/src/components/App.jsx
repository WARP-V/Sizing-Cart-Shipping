import React from 'react';
import axios from 'axios';
import Sizes from './Sizes';
import Description from './Description';

const _ = require('lodash');

class App extends React.Component {
  static sortSizes(a, b) {
    return a - b;
  }

  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
      defaultSizes: _.chunk(
        [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18], 5,
      ),
      description: '',
      shoeId: '310805-408',
      curButton: -1,
    };
    this.setCurrent = this.setCurrent.bind(this);
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
        sizes = sizes.sort(this.sortSizes);
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


  setCurrent(idx) {
    const newState = this.state;
    newState.curButton = idx;
    this.setState(newState);
  }

  render() {
    const { sizes, curButton, description, defaultSizes } = this.state;
    return (
      <div id="sizesAndDescription">
        <Sizes sizes={sizes} curButton={curButton} setCurrent={this.setCurrent} defaultSizes={defaultSizes} />
        <div className="cart">
          <button type="button" className="cart-button">Add to Cart</button>
          <button type="button" className="heart-button" title="Add to Wishlist"><i className="material-icons">favorite</i></button>
        </div>
        <Description description={description} />
        <div className="description-details">
          <ul className="details">
            <li>
            Shown:
              { description[1] }
            </li>
            <br />
            <li>
            Style:
              { description[0] }
            </li>
          </ul>
          <div className="description-readmore">Read more</div>
        </div>
      </div>
    );
  }
}

export default App;
