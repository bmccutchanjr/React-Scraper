// This middleware implements the API routes for the application.  It is required by server.js and in
// turn requires several other modules.

const express = require("express");
const scrape = require ("./scrape");
const database = require ("../data/database");

const app = express ();
const router = express.Router ();
app.use ("/", router);

const apiRoutes = (io) =>
{   // This is a little different than how I usually set up a routing module, but this module needs
    // a reference to 'io' which is in server.js.  To pass that reference, I need server.js to call a
    // function, which in turn will return a reference to router -- which is what server.js needs.

    router
    .use (function (request, result)
    {   // This always happens, no matter what route is requested.

        console.log(chalk.magenta("api.js: ", request.url))
        next();
    })
    .get ("/scrape", function (_, response)
    {   // This handles the API route /api/scrape

        scrape ()
        .then (function (result)
        {
            response.status(200).json (result);
        })
        .catch (function (error)
        {   response.status(500).send(error);
        })
    })
    .post ("/save", function (request, response)
    {   // This is called when someone want to save an article.  The data to be saved is passed in the
        // request header.  This scraper does not automatically save scraped articles (but only on command
        // from the user).

        const { headline, href } = request.body;
        database.saveArticle (headline, href)
        .then (function (result)
        {   // I'm thinking this needs to return the updated list of saved articles...

            console.log (chalk.magenta(result));
            response.status(200).json(result);
        })
        .catch (function(error)
        {
            response.status(500).send(error)
        })
    })
    .post ("/delete/:id", function (request, response)
    {

    })
    
    return router;
}

module.exports = apiRoutes;