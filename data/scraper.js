// This middleware scrapes data from the NY Times and uses database.js to insert that data into the
// database.

// const axios = require ("axios");
const chalk = require ("chalk");
// const cheerio = require ("cheerio");
const database = require ("./database");

const add = (...data) =>
{   database.addArticle (data[0], data[1], data[2])
    .then (function (data)
    {   console.log (chalk.green("all good"));

        database.getAllHeadlines ()
        .then (function (data)
        {
            console.log (JSON.stringify(data, null, 2))
        })
        .catch (function (error)
        {
            console.log (error)
        })
    })
    .catch (function (error)
    {   console.log (chalk.red(error));
    })
}

add ("first", "the first article", "http://placehold.it/200x100");
add ("second", "the second article", "http://placehold.it/200x100");

// database.getAllHeadlines ()
// .then (function (data)
// {
//     console.log (JSON.stringify(data, null, 2))
// })
// .catch (function (error)
// {
//     console.log (error)
// })


    