import express from 'express';
import * as coursesService from '../services/course-service';
import bunyan from 'bunyan';


export const coursesRouter = express.Router();

const log = bunyan.createLogger({name: "myProject_P0"});

    //  http://localhost:3000/courses
    // Retrieves an array of courses from database

 coursesRouter.get('', async(request, response, next)=>{
    log.info('coursesRouter works, getAllCourses()  !'); 
    await coursesService.getAllCourses().then(courses =>{
        response.set('content-type', 'application/json');
        response.json(courses);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});


 //    http://localhost:3000/courses/1
 //   Retrieves a single course from the database by id
 //   If the course does not exist, sends 404
coursesRouter.get('/:id/', async (request, response, next) => {
    log.info('coursesRouter works, getCourseById(id).'); 
    const id: number = parseInt(request.params.id);
    log.info('course router get course by ID works !!!'); 
    try {

        const course = await coursesService.getCourseById(id);
        response.json(course); 

    } catch (err) {
        response.sendStatus(500);
        console.log(err);
        return;
    }
    next();
});


/*
    POST http://localhost:3000/people
    Creates a new course and saves them to the database.
    Returns the inserted data as JSON with status 201.

coursesRouter.post('', (request, response, next) => {
    const course = request.body;
    const createdcourse = coursesService.saveCourse(course);



    response.status(201);
    response.json(createdcourse);
    next();
});

*/