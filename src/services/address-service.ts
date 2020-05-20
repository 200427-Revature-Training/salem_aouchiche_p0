
import { Address } from '../models/Address';
import * as addressdao from '../daos/address-dao'


export function getAllAddresses(): Promise<Address[]> {

    return addressdao.getAllAddresses();
}


export function getaddressById(id: number): Promise<Address> {
    return addressdao.getaddressById(id);
}

export function saveAddress(address: Address): Promise<Address> {

    // input new address from the user:
    const newAddress = new Address(
     address.street,
     address.city,
     address.state,
     address.zipcode
    );
    if(newAddress.street && newAddress.city && newAddress.state && newAddress.zipcode) {
        // submit to DAO
        return addressdao.saveAddress(newAddress); 

    } else {
        //  issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}