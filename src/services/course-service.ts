
import { Course } from '../models/Course';
import * as coursedao from '../daos/courses-dao'


export function getAllCourses(): Promise<Course[]> {
    return coursedao.getAllCourses();
}


export function getCourseById(id: number): Promise<Course> {
    return coursedao.getCourseById(id);
}

