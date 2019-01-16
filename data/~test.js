const chalk = require ("chalk");
const mongoose = require("mongoose");
const database = require ("./database");

const mongoURI = "mongodb://localhost/NYTimes";

if (process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
else
    mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", function(error)
{   console.log(chalk.red("Mongoose Error: ", error))
})
.once("open", function()
{   console.log(chalk.green("Mongoose has connected to the MongoDB server"))

    // database.create
    // (   "first headline",
    //     "the date",
    //     "link",
    //     "href",
    //     "meta",
    //     "image"
    // )
    database.readAll()
    .then(function(data)
    {
        console.log (JSON.stringify(data, null, 2))
    })
    .catch(function(error)
    {
        console.log(error)
    })
})

// database.create
//     (   "first headline",
//         "the date",
//         "link",
//         "href",
//         "meta",
//         "image"
//     )