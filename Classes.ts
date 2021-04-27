class Customer{

    _id: number;
    _firstName: string;
    _lastName: string;
    _passwrodNo: string;

    constructor(id, firstName, lastName, passwordNo) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._passwrodNo = passwordNo;
    }



    addded(){
        console.log(this._id + " id li " + this._firstName + " Kişisi Eklendi");
    };

}
let customer = new Customer(1, "mahmut", "bayramoğlu", "10233232");
customer.addded();
interface ICustomerDal {

    add();
    update();
    delete();

}







