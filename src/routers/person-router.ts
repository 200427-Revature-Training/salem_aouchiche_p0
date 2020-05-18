import express from 'express';
import * as personService from '../services/person-service';
import bunyan from 'bunyan';


export const personRouter = express.Router();

const log = bunyan.createLogger({name: "Project_P0"});

    //  http://localhost:3000/person
    // Retrieves an array of Person from database

 personRouter.get('', async(request, response, next)=>{
    log.info('personRouter works, getAllperson()  !'); 
    await personService.getAllPerson().then(person =>{
        response.set('content-type', 'application/json');
        response.json(person);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});


 //    http://localhost:3000/Person/1
 //   Retrieves a single Person from the database by id
 //   If the Person does not exist, sends 404
personRouter.get('/:id/', async (request, response, next) => {
    log.info('personRouter works, getPersonById(id).'); 
    const id: number = parseInt(request.params.id);
    log.info('Person router get Person by ID works !!!'); 
    try {

        const person = await personService.getPersonById(id);
        response.json(person); 

    } catch (err) {
        response.sendStatus(500);
        console.log(err);
        return;
    }
    next();
});


/*
    POST http://localhost:3000/people
    Creates a new Person and saves them to the database.
    Returns the inserted data as JSON with status 201.

personRouter.post('', (request, response, next) => {
    const Person = request.body;
    const createdPerson = personService.savePerson(Person);



    response.status(201);
    response.json(createdPerson);
    next();
});

*/