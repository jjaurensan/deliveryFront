export class Address {
    public idAddress: number;
    public streetOne: String;
    public streetTwo: String;
    public streetThree: String;
    public zipCode: String;
    public city: String;
    public floor:boolean;

    constructor(
        idAddressParam: number,
        streetOneParam: String,
        streetTwoParam: String,
        streetThreeParam: String,
        zipCodeParam: String,
        cityParam: String,
        floorParam:boolean
    ) {
        this.idAddress = idAddressParam;
        this.streetOne = streetOneParam;
        this.streetTwo = streetTwoParam;
        this.streetThree = streetThreeParam;
        this.zipCode = zipCodeParam;
        this.city = cityParam;
        this.floor = floorParam;
    }
}
