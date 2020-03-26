import { Address } from './address';
export class Customer {
    public idCustomer: number;
    public customerNumber: String;
    public customerListDeliveryAddress: Address[];
    public phone: String;
    public contactName: String;
    public arragement: boolean;

    constructor(
        idCustomerParam: number,
        customerNumberParma: String,
        customerListDeliveryAddressParam: [Address],
        phoneParam: String,
        contactNameParam: String,
        arragementParam: boolean
    ) {
        this.idCustomer = idCustomerParam;
        this.customerNumber = customerNumberParma;
        this.customerListDeliveryAddress = customerListDeliveryAddressParam;
        this.phone = phoneParam;
        this.contactName = contactNameParam;
        this.arragement = arragementParam;
    }
}
