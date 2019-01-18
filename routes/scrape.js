// This middleware scrapes data from the NY Times, using Axios and Cheerio.
//
// scraper.js implements the logic for the API route, "/api/scrape".  Data retrieved from the NY Times
// is returned to the browser and not saved directly to the database

const axios = require ("axios");
const chalk = require ("chalk");
const cheerio = require ("cheerio");

const scrape = () =>
{   
    return new Promise ((resolve, reject) =>
    {   // this is an asynchronous operation...use a Promise

        axios.get ("https://www.nytimes.com")
        .then(function ({data})
        {
            console.log (chalk.green("Let the scraping commence!"));

            const $ = cheerio.load (data);
            const allArticles = [];

            $("article.css-8atqhb").each(function(i, element)
            {   
                const headline = $(element).children("div").children("a").children("div").children("h2").text();
                const href = $(element).children("div").children("a").attr("href");

                if (headline === "")
                {    // console.log(chalk.red("no headline"));
                }
                else
                {   // Some of the articles don't have a headline (or more likely the NY Times uses slightly
                    // differing layouts for some articles and this is one of those.  The headline is there, but
                    // this code doesn't find it.  And that's okay with me.  If there is no headline, don't
                    // include this article.

                    allArticles.push (
                        {   "headline": headline,
                            "href":     href
                        })
                }
            })

            return resolve (allArticles);
        })
        .catch (function(error)
        {
            console.log (error);
            console.log(chalk.red("SCRAPE ERROR"));
            return reject ("Something bad happened");
        })
    })
}
