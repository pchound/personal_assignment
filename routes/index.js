const routes = require('express').Router();
const day = require('./day');

routes.use('/', require('./swagger'));
routes.use('/days', day);
routes.use
(
  '/',
  (
    docData = (req, res) => 
    {
        let docData = 
        {
            documentationURL: 'https://pchound.github.io/personal_assignment',
        };
        res.send(docData);
    }
  )
);

module.exports = routes;