class Customer {
    private _name:string;


    get name():string {
        return "Sayın "+this._name
    }
    set name(ad:string) {
        this._name = ad;
    }
}

let customer = new Customer();
customer.name ="Mahmut";
console.log(customer.name)
