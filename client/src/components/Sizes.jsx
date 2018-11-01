import React from 'react';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    console.log(this.props);
    return (
     <div className="sizes-table">
      {this.props.sizes.map(function(size, i) {
        return <button className='sizes-buttons' key={i}>{size}</button>
      })}
     </div> 
    )
  }
}

export default Sizes;