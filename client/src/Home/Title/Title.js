import React from "react";
import "./Title.css";

const Title = (props) =>
{   return (
        <header>
            <h1>NY Times</h1>
            <h2>Web Scraper</h2>
            <div className="title-buttons-div">
                <button className="title-buttons" onClick = { props.getArticles }>Scrape Articles</button>
                <button className="title-buttons" onClick = { props.getSavedArticles }>Get Saved Articles</button>
            </div>
        </header>
    )
}

export default Title;