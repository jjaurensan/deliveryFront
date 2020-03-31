
export class Carrier  {
  
    
    public idCarrier?: number;
    public name?: String;
    public streetOne?: String;
    public streetTwo?: String;
    public cityCode?: String;
    public city?: String;
    public phone?: String;

    constructor(
        nameParam: String,
        streetOneParam: String,
        streetTwoParam: String,
        cityCodeParam: String,
        cityParam: String,
        phoneParam: String
    ) {
        this.name = nameParam;
        this.streetOne = streetOneParam;
        this.streetTwo = streetTwoParam;
        this.cityCode = cityCodeParam;
        this.city = cityParam;
        this.phone = phoneParam;
    }
}
