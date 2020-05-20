import express from 'express';
import * as personTypeService from '../services/personType-service';
import {PersonType } from '../models/PersonType';
import bunyan from 'bunyan';


export const personTypeRouter = express.Router();

const log = bunyan.createLogger({name: "Project_P0"});

    //  http://localhost:3000/personType
    // Retrieves an array of Persontype from database

    personTypeRouter.get('', async(request, response, next)=>{
    log.info('persontypeRouter works, getAllpersonType()  !'); 

    await personTypeService.getAllPersonType().then(personType =>{
        response.set('content-type', 'application/json');
        response.json(personType);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
    
});


 //    http://localhost:3000/Person/1
 //   Retrieves a single Person from the database by id
 //   If the Person does not exist, sends 404
 personTypeRouter.get('/:id/', async (request, response, next) => {
    //log.info('personTypeRouter works, getPersonById(id).'); 

    const id: number = parseInt(request.params.id);
    log.info('Person router get Person by ID works !!!'); 
    try {

        const personType = await personTypeService.getPersonTypeById(id);
        response.json(personType); 

    } catch (err) {
        response.sendStatus(500);
        console.log(err);
        return;
    }
    next();
    
});

/*
POST http://localhost:3000/personType
Creates a new Person and saves them to the database.
Returns the inserted data as JSON with status 201.
*/

personTypeRouter.post('', (request, response, next) => {
    const personType = request.body;
    
    const createdNewPerson = personTypeService.savePersonType(personType);
    response.status(201);
    response.json(createdNewPerson);
    next();
});
