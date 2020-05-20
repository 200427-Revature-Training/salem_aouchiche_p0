import { db } from './db';
import {Address, addressTable } from '../models/Address';

// function with async/wait
export async function getAllAddresses():Promise<Address[]> {
   // console.log('getAlladdresses');
    const sql = 'SELECT * FROM addresses';
    const result = await db.query<addressTable>(sql,[]);
    return result.rows;
}

export async function getaddressById(addressId: number): Promise<Address> {
    //console.log('getaddressById'); 
    const checkAddressExists: boolean = await addressExists(addressId);
   
    if (!checkAddressExists) {
        return undefined;
    }
    
    const sql =`SELECT * FROM addresses WHERE id = $1`;
    const result = await db.query<Address>(sql, [addressId]);
    console.log(result.rows[0]); 
    return result.rows[0];
}

/*
    Function to check if a address exists with a given ID
*/
export async function addressExists(addressId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM addresses WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [addressId]);
    return result.rows[0].exists;
}

interface Exists {
    exists: boolean;
}


/*
    function save new address from user 
 */
export async function saveAddress(address: Address): Promise<Address> {
    const sql = `INSERT INTO addresses (street, city, state,zipcode) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result= await db.query<Address>(sql, [
        address.street,
        address.city,
        address.state,
        address.zipcode
]);
console.log("check saveAddress "+ result.rows[0]); 
return result.rows[0];  

}



