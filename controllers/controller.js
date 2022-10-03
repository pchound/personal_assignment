const http = require('http');
const { ObjectId } = require('mongodb');
const client = require('../db.js').client;

async function daysId(request, response) 
{
    console.log('Responding to request');
    const day = await client.db('personal_assignment').collection('days').find({}).toArray();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(day), 'utf-8');
};


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

module.exports={createDay};