import React from 'react'
export default function News(props) {
    let {title, description, imageUrl, newsUrl, author, date, source}=props;
    return (
        <div className="card" style={{ width: "18 rem" }}>
            <img src= {imageUrl} className="card-img-top" alt="image Not Found " />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Author : {author}</li>
                <li className="list-group-item">Published Date :- {date}</li>
                <li className="list-group-item">Source : {source}</li>
            </ul>
            <div className="card-body">
                <a href={newsUrl} className="card-link">Click to know more</a>
            </div>
        </div>
    );
}