// This is the Mongoose schema for the database.  It is a simple database, with only one collection.

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema(
{
    headline:
    {   type:     String,
        required: true
    },
    nytDate:
    {   type:     String,
    },
    link:
    {   type:     String,
    },
    href:
    {   type:     String,
    },
    meta:
    {   type:     String,
    },
    image:
    {   type:     String,
    }
})

var Article = mongoose.model("Article", schema);

// Export the Article model
module.exports = Article;
