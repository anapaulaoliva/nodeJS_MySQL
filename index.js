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

/*** Creating Router to POST ***/
app.post('/learners', (req, res) => {
    let learner = req.body;
    var sql = "SET @learner_id=?;SET @learner_name=?;SET @learner_email=?; SET @course_id=?; CALL learners.learner_create_update(@learner_id,@learner_name,@learner_email, @course_id);";
    mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_id], (err, rows, fields) => {
            if( !err )
                rows.forEach(element => {
            if( element.constructor == Array )
                res.send('New Learner ID : ' + element[0].learner_id);
            });
            else 
                console.log(err);
            })
});

/*** Router to UPDATE ***/
app.put('/learners', (req, res) => {
    let learner = req.body;
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_id = ?; CALL learners.learner_create_update(@learner_id,@learner_name,@learner_email,@course_id);";
    mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_id], (err, rows, fields) => {
        if ( !err )
            res.send('Learner Details Updated Successfully!');
        else
            console.log(err);
        })
});

/*** Router to DELETE user details ***/
app.delete('/learners/:id', (req,res) => {
    mysqlConnection.query('DELETE FROM learners.learner_details WHERE learner_id = ?', [req.params.id], (err, rows, fields) => {
        if( !err )
            res.send('Learner Record Deleted successfully!');
        else
            console.log(err);
    })
});
