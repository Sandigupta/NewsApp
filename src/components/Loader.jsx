import React, { Component } from 'react'
import Loading  from "./loading.gif";

export class Loader extends Component {
  render() {
    return (
      <div className='text-center' >
            <img  style={{width: "50px", height: "50px"}} src={Loading} alt="Loading img" />
      </div>
    )
  }
}

export default Loader
