import React from 'react'
import image from "../assets/news-default-big.png"

const NewsItem = ({title ,description,url, src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py2 p-3" style={{width:"340px",  }} >
    <img src={src?src:image} style={{height:"200px" ,width:"320px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,100):"New is a report od a current event. It is information about something that has just happened."}</p>
      <a href={url} className="btn btn-primary">
      Read More</a>
    </div>
  </div>
  )
}

export default NewsItem