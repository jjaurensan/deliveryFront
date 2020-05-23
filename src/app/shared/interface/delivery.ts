import { Carrier } from './carrier';
import { Customer } from './customer';
import { Address } from './address';
export interface Delivery {
    idDelivery?: number;
    createDateDelivery?: Date;
    carrier?: Carrier;
    customer?: Customer;
    numberOfPackage?: number;
    weight?: number;
    price?: number;
    address?: Address;
}
