import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let { title, description, imgurl, url } = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blanck" className="btn btn-primary">Read More</a>
  </div>
</div>
        )
    }
}

export default NewsItem