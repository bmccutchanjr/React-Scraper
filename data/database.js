// This is the middleware responsible for interactiong with the database.

// require the dependencies
const chalk = require("chalk");
const db = require ("./schema");

const database =
{   // This is a straight-up CRUD application.

    create: function(headline, nytDate, link, href, meta, img)
    {   // Add a new record in the database.
        //
        // Articles are added to the database when the user clicks a button to save on of the articles
        // scraped from the NY Times web site.

        // I could use rest operator in the parameter list, but naming each of them makes their purpose more
        // apparent

console.log (chalk.blue("create: ", headline));
        db.Article.create(
        {   headline,
            nytDate,
            link,
            href,
            img,
            meta
        })
console.log (chalk.blue("created"));
    },

    read: function(id)
    {   // Get a single article from the database

        return new Promise ((resolve, reject) =>
        {   const data = db.Article.find({ _id: id })
            .then(function(data)
            {   resolve(data)
            }) 
            .catch(function(error)
            {   reject(error)
            })
        })
    },

    readAll: function()
    {   // Get all of the articles that have been saved to the database, sorted by the date the article
        // was posted to the NY Times.

        return new Promise ((resolve, reject) =>
        {
            db.Article
            .find()
            .then(function(data)
            {   
                resolve(data)
            })
            .catch(function(error)
            {   reject(error)
            })
        })
    },

    update: function()
    {   // NOt sure I'm using this one with this application...

    },

    dalete: function(id)
    {   // Delete an article from the database

        return new Promise ((resolve, reject) =>
        {
            db.Article
            .destroy({ id: id })
            .then(function(data)
            {   
                resolve("all good")
            })
            .catch(function(error)
            {   reject(error)
            })
        })
    },

}

module.exports = database;
