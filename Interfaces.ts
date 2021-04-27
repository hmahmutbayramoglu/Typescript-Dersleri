class Customer {

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

}


interface ICustomerDal {

    save(): void;
    Update(): void;
    GetByCustomer();

}

class CustomerDal implements ICustomerDal {
    _customer;
    constructor(customer: Customer) {
        this._customer = customer;
    }


    save(): void {
        console.log(this._customer.name + " Kaydedildi");
    }
    Update(): void {
        console.log(this._customer.name + " Güncellendi");
    }
    GetByCustomer() {
        console.log(this._customer.id + " id li kişi Getirildi");
    }
}



let customerdal: ICustomerDal
let customer = new Customer();
customer.id = 1;
customer.name = "mahmut";

customerdal = new CustomerDal(customer);

customerdal.save();
customerdal.Update();
customerdal.GetByCustomer();







