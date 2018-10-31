import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  
  render() {
    console.log(this.props);
    return (
     <div className="sizes-table">
      {this.props.sizes.map(function(size){
        return <button>{size}</button>
      })}
     </div> 
    )
  }
}

export default Sizes;