import express from 'express';

import * as coursesService from '../services/course_service';
import { Course} from '../models/course';

export const coursesRouter = express.Router();

/*
    http://localhost:3000/courses
    Retrieves an array of courses from database
*/
coursesRouter.get('', (request, response, next) => {
    const courses: Course[] =coursesService.getAllCourses() ;
    response.json(courses);
    next();
});

/*
    http://localhost:3000/people/1
    Retrieves a single course from the database by id
    If the course does not exist, sends 404
*/
coursesRouter.get('/:id', (request, response, next) => {
    const id = +request.params.id;
    const course = coursesService.getCourseById(id);
    if (!course) {
        response.sendStatus(404);
    } else {
        response.json(course);
    }
    next();
});

/*
    POST http://localhost:3000/people
    Creates a new course and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/
coursesRouter.post('', (request, response, next) => {
    const course = request.body;
    const createdcourse = coursesService.saveCourse(course);
    response.status(201);
    response.json(createdcourse);
    next();
});