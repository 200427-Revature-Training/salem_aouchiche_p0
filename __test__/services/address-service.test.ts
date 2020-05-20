
import * as addressService from '../../src/services/address-service';
import * as addressDao from '../../src/daos/address-dao';
import { Address } from '../../src/models/Address';
jest.mock('../../src/daos/address-dao');

const mockAddressDao = addressDao as any;

describe('address', () => {
    test('it should save address', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockAddressDao.saveAddress.mockImplementation(() => {
            return {
                city: 'Peoria',
                zipcode: '61614'
            }
       });

        const addressInfo = new Address (
            "Sandiego street",
            "Peoria",
            "Illinois",
            61614
        )

        const response = await addressService.saveAddress(addressInfo);
        expect(response.city).toBeDefined();
        expect(response.city).toEqual('Peoria');
        expect(response.zipcode).toEqual('61614');
    });

    test('it should get all addresses', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockAddressDao.getAllAddresses.mockImplementation(() => {
            return [ 
                {
                    "id": 1,
                    "street": "34 Cambridge Trail",
                    "city": "Saint Paul",
                    "state": "Minnesota",
                    "zipcode": 55108
                },
                {
                    "id": 2,
                    "street": "87 South Drive",
                    "city": "Sacramento",
                    "state": "California",
                    "zipcode": 94237
                }
        ]
       });

        const response = await addressService.getAllAddresses();
        expect(response).toBeDefined();
        expect(response.length).toEqual(2);
        expect(response[0].city).toEqual('Saint Paul');
    });

    test('it should get address by id', async () => {

        // Stubbing - Replacing a method with a fake method implementation
        mockAddressDao.getaddressById.mockImplementation(() => {
            return  {
                    "id": 1,
                    "street": "34 Cambridge Trail",
                    "city": "Saint Paul",
                    "state": "Minnesota",
                    "zipcode": 55108
                }
       });

        const response = await addressService.getaddressById(1);
        expect(response).toBeDefined();
        expect(response.street).toEqual('34 Cambridge Trail');
    });

    test('it should throw 422 error', async () => {
    
        const addressInfo = new Address (
            "Sandiego street",
            "Peoria",
            "",
            61614
        )

        try {
            const response = await addressService.saveAddress(addressInfo);
        } catch(err) {
            expect(err).toBeDefined();
            expect(err).toEqual(422);
        }
    });
});


 