import { Carrier } from './carrier';
import { Customer } from './customer';

export interface Delivery {
    idDelivery?: number;
    createDateDelivery?: Date;
    carrier?: Carrier;
    customer?: Customer;
    numberOfPackage?: number;
}
