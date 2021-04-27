class GenericClass<T> {
    constructor() {

    }


    veriable: T;

    added(veriable2: T): T {
        return veriable2
    }
}




class Customer {
    constructor() {

    }
}

let genericClass = new GenericClass<Customer>()
genericClass.added(Customer)