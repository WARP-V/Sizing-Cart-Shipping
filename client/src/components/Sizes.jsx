import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: []
    }
  }
  
  
  render() {
    console.log(this.props);
    return (
     <div className="sizes-table">
      {this.props.sizes.map(function(size) {
        let row = <div></div>
        return <button className='sizes-buttons'>{size}</button>
      })}
     </div> 
    )
  }
}

export default Sizes;