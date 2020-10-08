const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');


/*** Configuring express server ***/
const app = express();
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
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*** Creating GET Router to get learners db ***/
app.get('/learners', (req, res) => {
    mysqlConnection.query(
        'SELECT * FROM learners.learner_details',
        (err, rows, fields) => {
            
            if( !err )
                res.send(rows);
            else
                console.log(err);
    })
});

/*** Creating Router to GET learner details from MySQL db ***/
app.get('/learners/:id', (req, res) => {
    mysqlConnection.query(
        'SELECT * FROM learners.learner_details WHERE learner_id = ?',
        [req.params.id],
        (err, rows, fields) => {
            if( !err )
                res.send(rows);
            else
                console.log(err);
    })
});