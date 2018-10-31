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
     <div>
     {this.props.description[2]}<br/>
     Shown: {this.props.description[1]}<br/>
     Style: {this.props.description[0]}<br/>
     </div> 
    )
  }
}

export default Description;