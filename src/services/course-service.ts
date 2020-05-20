
import { Course } from '../models/Course';
import * as coursedao from '../daos/courses-dao'
import { json } from 'body-parser';

export function getAllCourses(): Promise<Course[]> {
    return coursedao.getAllCourses();
}


export function getCourseById(id: number): Promise<Course> {
    return coursedao.getCourseById(id);
}


export function saveCourse(course: Course): Promise<Course> {
    console.log(JSON.stringify(course))
    // add new Course from the user:
    const newCourse = new Course(
        course.course_code, 
        course.course_name,
        course.course_unit,
        course.description,
        course.subjects_id
        ); 
        

       console.log(JSON.stringify(newCourse)) ; 
        //console.log(" new course test: " +newCourse.courseCode);
        //console.log("  course test code: " +course.courseCode);

        //console.log(newCourse.courseCode) ; 


    if(newCourse.course_code && newCourse.course_name && newCourse.course_unit&& newCourse.description &&newCourse.subjects_id) {
        // submit to DAO
        return coursedao.saveCourse(newCourse);  

    } else {
        // probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}