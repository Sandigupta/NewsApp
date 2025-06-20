import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export class Navbar extends Component {
  static defaultProps = {
   
  } 

  static propTypes = {
    toggle: PropTypes.func,
    bgcolor:PropTypes.string
  }


  render() {
    return (
      <div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary py-0" style={{color:"white"}}>
            <div className="container-fluid text-white bg-dark" >
                <Link className="navbar-brand text-white" to="#">Navbar</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item"  onClick={()=>this.props.toggle(this.props.bgColor)}>
                    <Link className="nav-link active text-white"  aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item " onClick={()=>this.props.toggle(this.props.bgColor)}>
                    <Link className="nav-link text-white"  to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"  to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"   to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"  to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"  to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"  science to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white"  to="/technology">Technology</Link>
                    </li>
                   
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
                </div>
            </nav>
      </div>
    )
  }
}

export default Navbar
