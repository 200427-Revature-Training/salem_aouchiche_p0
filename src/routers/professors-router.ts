import express from 'express';
import * as professorsService from '../services/professors-services';
import { create } from 'domain';
import bunyan from 'bunyan';


const log = bunyan.createLogger({name: "myapp"});


export const professorsRouter = express.Router();

/*
http://localhost:3000/professors 

*/
professorsRouter.get('', (request, response, next)=>{

    professorsService.getAllProfessors().then(professors =>{
        response.set('content-type', 'application/json');
        response.json(professors);
        //console.log(professors); 
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});

/*
http://localhost:3000/professors/:id

*/
professorsRouter.get('/:id', (request, response, next) => {
   //if(!this.getUserRole(id).can_get_inf) throw ('you dont have permission')
    const id = +request.params.id;
    
    professorsService.getProfessorById(id).then(professor => {
        if (!professor) {
            response.sendStatus(404);
        } else {
            response.json(professor);
        }
        next();
    }).catch(err => {
        response.sendStatus(500);
        next();
    })
});

/*

professorsRouter.post('/shit', (request, response, next) => {
    log.info('post obj'); 
    log.info(request.body); 
    
    //if(!this.getUserRole(id).can_get_inf) throw ('you dont have permission')
     const id = +request.params.id;
     professorsService.getprofessorById(id).then(professor => {
         if (!professor) {
             response.sendStatus(404);
         } else {
             response.json(professor);
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