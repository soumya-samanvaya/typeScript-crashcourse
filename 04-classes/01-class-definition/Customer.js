var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "fowler");
// myCustomer.firstName="ABC";
// myCustomer.lastName="CDS";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
