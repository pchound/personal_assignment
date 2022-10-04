

const dotenv = require("dotenv");
const express = require("express");

const swaggerJSDoc = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.json());
var database;

const options =
{
    definition:
    {
        openapi: '3.0.0',
        info:
        {
            title: 'My big student project',
            version: '1.0.0'
        },
        servers:
        [
            {
                api: 'http://localhost:3000/'
                //api: 'https://big-personal-project.onrender.com'
            }
        ]
    },
    apis: ['./mongodb.js']
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc))





const day_route = require('./routes/dayRoute.js');
let PORT = process.env.PORT || 3000;

app.use(day_route);

app.listen(PORT,()=>
{
    console.log('The server is running at port ' + PORT);
});