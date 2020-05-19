
import { Course } from '../models/Course';
import * as coursedao from '../daos/courses-dao'


export function getAllCourses(): Promise<Course[]> {
    return coursedao.getAllCourses();
}


export function getCourseById(id: number): Promise<Course> {
    return coursedao.getCourseById(id);
}


export function saveCourse(course: Course): Promise<Course> {

    // input new Course from the user:
    const newCourse = new Course(
    undefined,
    course.courseCode,
    course.courseName,
    course.courseUnit,
    course.desciption,
    course.subjectsId
    );
    
    console.log("newCourse "+ newCourse); 
    
    if(course.courseCode && course.courseName && course.courseUnit &&  course.desciption && course.subjectsId) {
        // submit to DAO
        return coursedao.saveCourse(newCourse); 

    } else {
        // TODO: We should fail here, probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}
