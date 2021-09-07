//CRUD operations go in this file//

//set up variables to make yoru connnections//
const mongodb = require('mongodb')// requires the mongodb package we installed 
const MongoClient = mongodb.MongoClient //gives us access to the function needed to perform basic CRUD operations
//define the connection URL in the database you're connecting to
const connectionURL = 'mongodb://127.0.0.1:27017' //local host ip is typed out instead of saying localohost, port info
const database = 'taskapp' //now we have all the info we need to connect to our database
//now we can use mongo client and it takes in a few arguments to actually set up the connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {//second argument allows the parse url to parse correctly
    if (error) {
        return console.log('unable to connect to database')
    }
    console.log('connected correctly!')

})