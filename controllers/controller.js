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
        const contacts = await client.db('personal_assignment').collection('days').find({_id:new ObjectId(req.params.id)}).toArray();
        res.status(200).json(contacts[0]);
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






module.exports={daysId, getAllDays, getDayById, createDay, updateDayById, deleteDayById};