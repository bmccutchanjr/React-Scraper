import React from 'react';
// import logo from './logo.svg';
import './Home.css';
import Title from "./Title"

const Home = (props) =>
{   
    return (
    <div className="App">
        <Title getArticles = { props.getArticles }
                saveArticle = { props.getSavedArticles } />
    </div>
    );
}

export default Home;
