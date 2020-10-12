# Building a CRUD Application with MySQL and Node.JS

| Route          | Method       | Type         | Description              |
| :------------- | :----------: | -----------: | -----------------------: |
|  /learners     | GET          | JSON         | Get all Learners data    |
| /learners{id}  | GET          | JSON         | Get a single id's data   |
| /learners      | POST         | JSON         | Insert new record into db|
| /learners      | PUT          | JSON         | Update new record into db|
| /learners{id}  | DELETE       | JSON         | Delete a single id's data|


### Resources 

- [Angular Forms Guide](https://angular.io/guide/forms-overview)

- [MySQL Installer 8.0.21](https://dev.mysql.com/downloads/installer/)

- [Body-parser](https://www.npmjs.com/package/body-parser)
  Helps in converting the POST data into the request body.

- [Nodemon](https://nodemon.io/)
  Automatic restarting of application whenever the code changes.

- [Postman](https://www.postman.com/downloads/)
  Endpoint to consume APIs

##### Creating package.json / index.js

```
npm init
```

```
npm i --s body-parser
```

```
npm i -g nodemon
```

```
nodemon index.js
```
![nodemon](https://user-images.githubusercontent.com/56927809/95644696-00c50100-0a7e-11eb-88f4-46e8e6985894.JPG)

#### Consuming API 

![postman](https://user-images.githubusercontent.com/56927809/95644744-3ff35200-0a7e-11eb-9d18-1bd8aa737dcc.JPG)

#### MySQL Workbench 

![sql](https://user-images.githubusercontent.com/56927809/95644811-c445d500-0a7e-11eb-8291-b4cd2802ae76.JPG)
