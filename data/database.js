// This is the middleware that is responsible for interacting with the database.

const connection = require ("./connection");

const database =
{   addArticle: (headline, meta, image) =>
    {   // Add an article to the database

        // return a Promise (not a callback)

        return new Promise ((resolve, reject) =>
        {   query = "insert into Articles (headline, meta, image_url) values (?, ?, ?);";
            connection.query (query, [headline, meta, image], function (error, results)
            {   if (error) return reject (error);

console.log (results.affectedRows)
                if (results.affectedRows != 1) return reject ("An error occured inserting this article.  Is the headline unique?");

                return resolve (results);
            })
        })
    },

    getAllHeadlines: () =>
    {   // get all headlines from the database

        return new Promise ((resolve, reject) =>
        {   query = "select headline from Articles order by createdAt desc;";
            connection.query (query, function (error, results)
            {   if (error) return reject (error);

                return resolve (results);
            })
        })
    },

    getOneArticle: (id) =>
    {   // get all of the data for one article
    
        return new Promise ((resolve, reject) =>
        {   query = "select * from Articles where id = ?";
            connection.query (query, [id], function (error, results)
            {   if (error) return reject (error);

                return resolve (results);
            })
        })
    }
}

module.exports = database;