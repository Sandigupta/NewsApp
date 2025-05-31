import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl,  newsUrl } = this.props;
    return (
      <div>
          <div className="card" style={{ width: "18rem", marginLeft:"100px"}}>
          <img src={imageUrl} style={{ width: '286.400px', height: ' 149.688px', objectFit: 'cover' }} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
              <a href={ newsUrl} target='_blank' className="btn btn-dark">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewItem
// 149.688px 363.288px style={{ width: '286.400px', height: ' 149.688px', objectFit: 'cover' }} 286.400 149.688