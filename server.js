const dotenv = require("dotenv");
const { request, response } = require("express");
const express = require("express");

//const swaggerJSDoc = require('./swagger.json');
//const swaggerUi = require('swagger-ui-express');

dotenv.config();
const app = express();
const { auth } = require('express-openid-connect');


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
                //Leave this alone
                api: 'https://localhost:3000/'
                //api: 'https://big-personal-project.onrender.com/'
            }
        ]
    },
    apis: ['./mongodb.js']
}
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc))

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  };

    // auth router attaches /login, /logout, and /callback routes to the baseURL
    app.use(auth(config));

const route = require('./routes');
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>
{
    res.send(req.oidc.isAuthenticated()?'logged in':'logged out');
}
);



app.use(route);

app.listen(PORT,()=>
{
    console.log('The server is running at port ' + PORT);
});

