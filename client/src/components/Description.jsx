import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    console.log(this.props);
    return (
      <div className="description">
        <p>
          <div className="description-paragraph">
            {this.props.description[2]}
          </div>
        </p>
        <div className="description-details">
          <ul class="details">
            Shown: {this.props.description[1]}<br/>
            Style: {this.props.description[0]}
          </ul>
        </div>
      </div> 

    )
  }
}

export default Description;