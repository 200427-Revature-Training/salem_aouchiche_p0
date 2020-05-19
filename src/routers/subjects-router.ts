import express from 'express';
import * as subjectsService from '../services/subjects-service';
import bunyan from 'bunyan';


export const subjectsRouter = express.Router();
const log = bunyan.createLogger({name: "Project_P0"});

  //  http://localhost:3000/subjects
 // Retrieves an array of subjects from database

 subjectsRouter.get('', async(request, response, next)=>{
    //log.warn('/subjects,subjectsRouter  is okay!');
    await subjectsService.getAllSubjects().then(subjects =>{
        response.set('content-type', 'application/json');
        response.json(subjects);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});
 

//    http://localhost:3000/subjects/:1
 //   Retrieves a single course from the database by id
 //   If the course does not exist, sends 404
subjectsRouter.get('/:id', async (request, response, next) => {
    log.info('subjectsRouter works, getSubjectById(id).'); 
    const id: number = parseInt(request.params.id);
    try {

        const subject = await subjectsService.getSubjectById(id);
        response.json(subject); 

    } catch (err) {
        response.sendStatus(500);
        console.log(err);
        return;
    }
    next();
});

/*
POST http://localhost:3000/subjects
Creates a new subject and saves them to the database.
Returns the inserted data as JSON with status 201.
*/
subjectsRouter.post('', async(request, response, next) => {
    const subject = request.body;
    try{
        const createdNewSubject = await subjectsService.saveSubject(subject); 
        response.status(201);
        response.json(createdNewSubject);

    }catch(err){
        console.log(err);
        return;
    }
    
    next();
});

