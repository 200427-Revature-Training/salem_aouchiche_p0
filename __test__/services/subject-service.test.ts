
import * as subjectService from '../../src/services/subjects-service';
import * as subjectDao from '../../src/daos/subjects-dao';
import { Subject } from '../../src/models/Subject';
jest.mock('../../src/daos/subjects-dao');

const mockSubjectDao = subjectDao as any;

describe('subject', () => {
    test('it should save subject', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockSubjectDao.saveSubject.mockImplementation(() => {
            return {
            "id": 1,
            "subjects_name": "Mathematics"
            }
       });

        const subjectInfo = new Subject (
         1,
         "Mathematics"
        )

        const response = await subjectService.saveSubject(subjectInfo);
        expect(response).toBeDefined();
        expect(response.subjects_name).toEqual('Mathematics');
    
    });

    test('it should get all subjectes', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockSubjectDao.getAllSubjects.mockImplementation(() => {
            return [ 
                {
                    "id": 1,
                    "subjects_name": "Mathematics"
                },
                {
                    "id": 2,
                    "subjects_name": "Computer Sciences"
                },
                {
                    "id": 3,
                    "subjects_name": "English"
                }
        ]
       });

        const response = await subjectService.getAllSubjects();
        expect(response).toBeDefined();
        expect(response.length).toEqual(3);
        expect(response[1].subjects_name).toEqual('Computer Sciences');
    });

    test('it should get subject by id', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockSubjectDao.getSubjectById.mockImplementation(() => {
            return  {
                "id": 3,
                "subjects_name": "English"
            }
       });

        const response = await subjectService.getSubjectById(1);
        expect(response).toBeDefined();
        expect(response.subjects_name).toEqual('English');
    });

    test('it should throw 422 error', async () => {
    
        const subjectInfo = new Subject 
        (
            3,
            "" // empty 
        )

        try {
            const response = await subjectService.saveSubject(subjectInfo);
        } catch(err) {
            expect(err).toBeDefined();
            expect(err).toEqual(422);
        }
    });
});


 