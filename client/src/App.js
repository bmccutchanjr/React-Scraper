import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./Home"

const axios = require ("axios");

class App extends Component
{   state =
    {   headlines: []

    }

    scrapeArticles = () =>
    {   // Request the /api/scrape route to scrape articles from the NY Times web site.

        axios ("/api/scrape")
        .then (function (data)
        {
            this.setState ({ headlines: data })
        })
        .catch (function (error)
        {
            console.log (error)
        })
    }

    getSavedArticles = () =>
    {

    }

    render()
    {
        return (
        <div className="App">
            <Home getArticles = { this.getArticles }
                  getSavedArticles = { this.getSavedArticles }/>
        </div>
        );
    }
}

export default App;
