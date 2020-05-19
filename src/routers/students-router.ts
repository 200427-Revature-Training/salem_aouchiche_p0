import express from 'express';
import * as studentsService from '../services/students-service';
import { create } from 'domain';
import bunyan from 'bunyan';


const log = bunyan.createLogger({name: "myapp"});


export const studentsRouter = express.Router();

/*
http://localhost:3000/students 

*/
studentsRouter.get('', (request, response, next)=>{

    studentsService.getAllStudents().then(students =>{
        response.set('content-type', 'application/json');
        response.json(students);
        //console.log(students); 
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});

/*
http://localhost:3000/students/:id

*/
studentsRouter.get('/:id', (request, response, next) => {
   //if(!this.getUserRole(id).can_get_inf) throw ('you dont have permission')
    const id = +request.params.id;
    
    studentsService.getStudentById(id).then(Student => {
        if (!Student) {
            response.sendStatus(404);
        } else {
            response.json(Student);
        }
        next();
    }).catch(err => {
        response.sendStatus(500);
        next();
    })
});

/*
POST http://localhost:3000/students
Creates a new student and saves them to the database.
Returns the inserted data as JSON with status 201.
*/
studentsRouter.post('', (request, response, next) => {
    const student = request.body;
    const createdNewStudent =studentsService.saveStudent(student); 
    response.status(201);
    response.json(createdNewStudent);
    next();
});
