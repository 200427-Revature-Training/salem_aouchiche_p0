
import * as personService from '../../src/services/person-service';
import * as personDao from '../../src/daos/person-dao';
import { Person } from '../../src/models/person';
jest.mock('../../src/daos/person-dao');

const mockPersonDao = personDao as any;

describe('person', () => {
    test('it should save person', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonDao.savePerson.mockImplementation(() => {
            return {
            first_name: 'salem',
            last_name: 'Aouchiche',
            phone:640-610-7614,
            email:"saouchiche@gmail.com"
            }
       });

        const personInfo = new Person (
        
         "salem",
         "Aouchiche",
         "saouchiche@gmail.com",
         "salempass",
        640-610-7614,
         1,
         2
        )

        const response = await personService.savePerson(personInfo);
        expect(response.first_name).toBeDefined();
        expect(response.last_name).toBeDefined();
        expect(response.phone).toEqual(640-610-7614);
        expect(response.email).toEqual("saouchiche@gmail.com");
    });

    

    test('it should get all persones', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonDao.getAllPerson.mockImplementation(() => {
            return [
                {
                    "id": 1,
                    "first_name": "salem",
                    "last_name": "Aouchiche",
                    "email": "saouchiche@gmail.com",
                    "pass": "salempass",
                    "phone": "640-610-7614",
                    "person_type_id": 1,
                    "addresses_id": 1
                },
                {
                    "id": 2,
                    "first_name": "Billy",
                    "last_name": "Brown",
                    "email": "bbrown@gmail.com",
                    "pass": "bbrownpass",
                    "phone": "777-700-2185",
                    "person_type_id": 1,
                    "addresses_id": 2
                }
        ]
       });

        const response = await personService.getAllPerson();
        expect(response).toBeDefined();
        expect(response.length).toEqual(2);
        expect(response[0].first_name).toEqual('salem');
        expect(response[0].last_name).toEqual('Aouchiche');
        expect(response[1].email).toEqual("bbrown@gmail.com");
        expect(response[1].phone).toEqual('777-700-2185');

    });

    test('it should get person by id', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockPersonDao.getPersonById.mockImplementation(() => {
            return  
            [
                {
                    "id": 3,
                    "first_name": "Cindy",
                    "last_name": "Chevy",
                    "email": "cchevy@gmail.com",
                    "pass": "cchevypass",
                    "phone": "981-271-4315",
                    "person_type_id": 1,
                    "addresses_id": 3
                }
            
            ]
            
                
       });

        const response = await personService.getPersonById(1);
        expect(response.first_name).toEqual('Cindy');
        expect(response.last_name).toEqual('Chevy');
        expect(response.email).toEqual('cchevy@gmail.com');
        expect(response.pass).toEqual('cchevypass');
        expect(response.phone).toEqual('981-271-4315');
    });

    test('it should throw 422 error', async () => {
    
        const personInfo = new Person 
        (        
            "", // person with empty record first_name should throw an error.
            "Davidson",
            "ddavidson@gmail.com",
            "ddavidsonpass",
            160-489-9582,
            1,
            4
        )

        try {
            const response = await personService.savePerson(personInfo);
        } catch(err) {
            expect(err).toBeDefined();
            expect(err).toEqual(422);
        }
    });
    
});


