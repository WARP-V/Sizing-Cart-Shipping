import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    return (
      <div className="description">
        <div className="description-paragraph">
          <p>
            {this.props.description[2]}
          </p>
        </div>
        <div className="description-details">
          <ul className="details">
            Shown: {this.props.description[1]}<br/>
            Style: {this.props.description[0]}
          </ul>
        </div>
      </div> 
    )
  }
}

export default Description;