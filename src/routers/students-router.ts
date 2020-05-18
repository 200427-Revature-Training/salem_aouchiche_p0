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

studentsRouter.post('/shit', (request, response, next) => {
    log.info('post obj'); 
    log.info(request.body); 
    
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
function getUserRole(id) {
    // role 
    return this.db.select('username, email, r.name, r.can_get_inf from person p join roles r on p.role_id = r.id')
}
*/