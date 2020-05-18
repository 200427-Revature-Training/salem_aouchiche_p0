import express from 'express';
import * as addressService from '../services/address-service';
import bunyan from 'bunyan';


export const addressRouter = express.Router();

const log = bunyan.createLogger({name: "myProject_P0"});

    //  http://localhost:3000/addresss
    // Retrieves an array of addresss from database

    addressRouter.get('', async(request, response, next)=>{
    log.info('addresssRouter works, getAllAddresss()  !'); 
    await addressService.getAllAddresses().then(addresss =>{
        response.set('content-type', 'application/json');
        response.json(addresss);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});


 //    http://localhost:3000/addresss/1
 //   Retrieves a single address from the database by id
 //   If the address does not exist, sends 404
 addressRouter.get('/:id/', async (request, response, next) => {
    log.info('addresssRouter works, getaddressById(id).'); 
    const id: number = parseInt(request.params.id); 
    try {

        const address = await addressService.getaddressById(id);
        response.json(address); 

    } catch (err) {
        response.sendStatus(500);
        console.log(err);
        return;
    }
    next();
});


/*
    POST http://localhost:3000/people
    Creates a new address and saves them to the database.
    Returns the inserted data as JSON with status 201.

addresssRouter.post('', (request, response, next) => {
    const address = request.body;
    const createdaddress = addresssService.saveaddress(address);



    response.status(201);
    response.json(createdaddress);
    next();
});

*/