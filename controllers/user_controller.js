const http = require('http');
const { ObjectId } = require('mongodb');
const client = require('../db.js').client;



async function users(request, response) {
    console.log('Responding to request');
    const contacts = await client.db('personal_assignment').collection('users').find({}).toArray();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(contacts), 'utf-8');
};












async function usersId(request, response) 
{
    console.log('Responding to request');
    const user = await client.db('personal_assignment').collection('users').find({}).toArray();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(user), 'utf-8');
};









async function getAllUsers(req, res) 
{
    try 
    {
        const users= await client.db('personal_assignment').collection('users').find({}).toArray();
        res.status(200).json(users);
    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }
};









async function getUserById(req, res) {
    try {
        const user = await client.db('personal_assignment').collection('users').find({_id:new ObjectId(req.params.id)}).toArray();
        res.status(200).json(users[0]);
    } catch (error) {
        return res.status(500).json({message:'Server Error'});
    }
}














async function createUser(req, res) 
{
    const user = 
    {
        date: req.body.date,
        calories_burned: req.body.calories_burned,
        workout_type: req.body.workout_type,
        notes: req.body.notes,

        protein: req.body.protein,
        carbs: req.body.carbs,
        fats: req.body.fats,
    };

    const response = await client.db('personal_assignment').collection('users').insertOne(user);
    if (response.acknowledged) 
    {
        res.status(201).json(response);
    } 
        else 
        {
            res.status(500).json(response.error || 'Some error occurred while creating the user.');
        }
};









async function updateUserById(req,res)
{
    try {
        const user = 
        {
            date: req.body.date,
            calories_burned: req.body.calories_burned,
            workout_type: req.body.workout_type,
            notes: req.body.notes,
    
            protein: req.body.protein,
            carbs: req.body.carbs,
            fats: req.body.fats,
        };
        const response = await client.db('personal_assignment').collection('users').findOneAndUpdate({_id:new ObjectId(req.params.id)},{$set:user});
        res.status(200).json({message: 'Successfully updated user'});

    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }
}










async function deleteUserById(req,res)
{
    try 
    {
        const response = await client.db('personal_assignment').collection('users').deleteOne({_id:new ObjectId(req.params.id)});
        res.status(200).json({message: 'user deleted successfully'});
    } 
    catch (error) 
    {
        return res.status(500).json({message:'Server Error'});
    }

}




module.exports={users, usersId, getAllUsers, getUserById, createUser, updateUserById, deleteUserById};