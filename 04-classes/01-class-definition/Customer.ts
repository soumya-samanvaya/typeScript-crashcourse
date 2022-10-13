class Customer{
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;

    }
}

let myCustomer = new Customer("Martin","fowler");

// myCustomer.firstName="ABC";
// myCustomer.lastName="CDS";

console.log(myCustomer.firstName+" "+myCustomer.lastName);