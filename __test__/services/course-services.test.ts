
import * as courseService from '../../src/services/course-service';
import * as courseDao from '../../src/daos/courses-dao';
import { Course } from '../../src/models/Course';
jest.mock('../../src/daos/courses-dao');

const mockCourseDao = courseDao as any;

describe('Course', () => {
    test('it should save Course', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockCourseDao.saveCourse.mockImplementation(() => {
            return {
                course_code: 'MATH151',
                course_name: 'Calculus with Analytic Geometry II'
            }
       });

        const courseInfo = new Course (
            "MATH151",
            "Calculus with Analytic Geometry II",
            4,
            "This is the second course in the calculus and analytic geometry sequence.",
            1
        )

        const response = await courseService.saveCourse(courseInfo);
        expect(response.course_code).toBeDefined();
        expect(response.course_code).toEqual('MATH151');
        expect(response.course_name).toEqual('Calculus with Analytic Geometry II');
    });

   
    test('it should get all Courses', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockCourseDao.getAllCourses.mockImplementation(() => {
            return [ 
                {
                    "id": 3,
                    "course_code": "MATH252",
                    "course_name": "Calculus with Analytic Geometry III",
                    "course_unit": 4,
                    "description": "This course includes the algebra and geometry of 2 and 3 dimensional Euclidean vectors,\r\n\t the algebra and calculus of multivariable functions including composition of functions.",
                    "subjects_id": 1
                },
                {
                    "id": 4,
                    "course_code": "CS190",
                    "course_name": "Java Programming",
                    "course_unit": 4,
                    "description": "This course is an introduction to programming using Java. \r\n\t\tThe course covers the fundamentals of object-oriented programming utilizing the Java programming language \r\n\t\tfor general purpose business programs and interactive World Wide Web-based Internet programs. ",
                    "subjects_id": 2
                }
        ]
       });

        const response = await courseService.getAllCourses();
        expect(response).toBeDefined();
        expect(response.length).toEqual(2);
        expect(response[0].course_unit).toEqual(4);
    });

    test('it should get Course by id', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockCourseDao.getCourseById.mockImplementation(() => {
            return  [
                {
                    "id": 4,
                    "course_code": "CS190",
                    "course_name": "Java Programming",
                    "course_unit": 4,
                    "description": "This course is an introduction to programming using Java. \r\n\t\tThe course covers the fundamentals of object-oriented programming utilizing the Java programming language \r\n\t\tfor general purpose business programs and interactive World Wide Web-based Internet programs. ",
                    "subjects_id": 2
                }
            ]        
                
       });

        const response = await courseService.getCourseById(1);
        expect(response).toBeDefined();
        expect(response[0].course_name).toEqual("Java Programming");
        expect(response[0].course_unit).toEqual(4);
    });

    test('it should throw 422 error', async () => {
    
        const courseInfo = new Course (
                     "",            // course_code is undefined this should throw an error.
                    "Java Programming",
                     4,
                    "This course is an introduction to programming using Java. \r\n\t\tThe course covers the fundamentals of object-oriented programming utilizing the Java programming language \r\n\t\tfor general purpose business programs and interactive World Wide Web-based Internet programs. ",
                     2
        )

        try {
            const response = await courseService.saveCourse(courseInfo);
        } catch(err) {
            expect(err).toBeDefined();
            expect(err).toEqual(422);
        }
    });
    
});


