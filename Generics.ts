function GenericFunction<T>(params:T):T {
  
    return params
}

console.log(GenericFunction<number>(4));

console.log(GenericFunction<string>("asd"));


class Customer {
    constructor() {
        
    }
}

console.log(GenericFunction<Customer>(new Customer));
