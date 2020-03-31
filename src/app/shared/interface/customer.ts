import { Address } from './address';


export interface Customer{
     idCustomer?: number;
     customerNumber?: any;
     customerListDeliveryAddress?: Address[];
     phone?: any;
     contactName?: any;
     arragement?: boolean;
}
