const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
//Configuring express server
app.use(bodyparser.json());

/*Create a connection with MySQL database using the createConnection function
and provide required details => host, user, password, db */
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '43B4r.',
    multipleStatements: true
});

//Estabilishing connection with the database using provided credentials.
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Estabilished Successfully.');
    else
    console.log('Connection Failed.' + JSON.stringify(err, undefined, 2));
});

//Specifying the port we will be sending our requests to the server.
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))


