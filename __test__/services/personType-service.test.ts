
import * as personTypeService from '../../src/services/personType-service';
import * as personTypeDao from '../../src/daos/personType-dao';
import { PersonType } from '../../src/models/PersonType';
jest.mock('../../src/daos/personType-dao');

const mockPersonTypeDao = personTypeDao as any;

describe('personType', () => {
    test('it should save personType', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonTypeDao.savePersonType.mockImplementation(() => {
            return {
                "id": 1,
                "person_type": "Student"
            }
       });

        const personTypeInfo = new PersonType (
         "Student"
        )

        const response = await personTypeService.savePersonType(personTypeInfo);
        expect(response).toBeDefined();
        expect(response.person_type).toEqual('Student');
    
    });
    

    test('it should get all personTypees', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonTypeDao.getAllPersonType.mockImplementation(() => {
            return [ 
                {
                    "id": 1,
                    "person_type": "Student"
                },
                {
                    "id": 2,
                    "person_type": "Professor"
                }
        ]
       });

        const response = await personTypeService.getAllPersonType();
        expect(response).toBeDefined();
        expect(response.length).toEqual(2);
        expect(response[1].person_type).toEqual('Professor');
    });

    test('it should get personType by id', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonTypeDao.getPersonTypeById.mockImplementation(() => {
            return {
                "id": 2,
                "person_type": "Professor"
            }
       });

        const response = await personTypeService.getPersonTypeById(1);
        expect(response).toBeDefined();
        expect(response.person_type).toEqual('Professor');
    });

    test('it should throw 422 error', async () => {
    
        const personTypeInfo = new PersonType 
        (
            "" // empty 
        )

        try {
            const response = await personTypeService.savePersonType(personTypeInfo);
        } catch(err) {
            expect(err).toBeDefined();
            expect(err).toEqual(422);
        }
    });

});


 