const http = require('http');
const { ObjectId } = require('mongodb');
const client = require('../db.js').client;



async function days(request, response) {
    console.log('Responding to request');
    const contacts = await client.db('personal_assignment').collection('days').find({}).toArray();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(contacts), 'utf-8');
};












async function daysId(request, response) 
{
    console.log('Responding to request');
    const day = await client.db('personal_assignment').collection('days').find({}).toArray();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(day), 'utf-8');
};









async function getAllDays(req, res) 
{
    try 
    {
        const days= await client.db('personal_assignment').collection('days').find({}).toArray();
        res.status(200).json(days);
    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }
};









async function getDayById(req, res) {
    try {
        const day = await client.db('personal_assignment').collection('days').find({_id:new ObjectId(req.params.id)}).toArray();
        res.status(200).json(days[0]);
    } catch (error) {
        return res.status(500).json({message:'Server Error'});
    }
}














async function createDay(req, res) 
{
    const day = 
    {
        date: req.body.date,
        calories_burned: req.body.calories_burned,
        workout_type: req.body.workout_type,
        notes: req.body.notes,

        protein: req.body.protein,
        carbs: req.body.carbs,
        fats: req.body.fats,
    };

    const response = await client.db('personal_assignment').collection('days').insertOne(day);
    if (response.acknowledged) 
    {
        res.status(201).json(response);
    } 
        else 
        {
            res.status(500).json(response.error || 'Some error occurred while creating the day.');
        }
};









async function updateDayById(req,res)
{
    try {
        const day = 
        {
            date: req.body.date,
            calories_burned: req.body.calories_burned,
            workout_type: req.body.workout_type,
            notes: req.body.notes,
    
            protein: req.body.protein,
            carbs: req.body.carbs,
            fats: req.body.fats,
        };
        const response = await client.db('personal_assignment').collection('days').findOneAndUpdate({_id:new ObjectId(req.params.id)},{$set:day});
        res.status(200).json({message: 'Successfully updated day'});

    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }
}










async function deleteDayById(req,res)
{
    try 
    {
        const response = await client.db('personal_assignment').collection('days').deleteOne({_id:new ObjectId(req.params.id)});
        res.status(200).json({message: 'Day deleted successfully'});
    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }

}


/*const authorize = async (req,res,next)=>{
    
    if(req.session.user){
        return next();
    }
    res.status(403).send('Access denied. You must log in first');
}*/






/*const express = require('express');
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();

async function login(){
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
    
    // req.isAuthenticated is provided from the auth router
    app.get('/', (req, res) => {
      res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    });
    
    app.get('/profile', requiresAuth(), (req, res) => {
        res.send(JSON.stringify(req.oidc.user));
    });
}*/





module.exports={days, daysId, getAllDays, getDayById, createDay, updateDayById, deleteDayById, /*authorize*/ /*login*/};