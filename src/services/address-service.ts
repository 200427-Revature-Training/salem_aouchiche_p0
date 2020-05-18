
import { Address } from '../models/Address';
import * as addressdao from '../daos/address-dao'


export function getAllAddresses(): Promise<Address[]> {
    return addressdao.getAllAddresses();
}


export function getaddressById(id: number): Promise<Address> {
    return addressdao.getaddressById(id);
}

