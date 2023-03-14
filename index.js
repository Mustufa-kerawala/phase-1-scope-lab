// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'bob';
// console.log(customerName);

function upperCaseCustomerName() {
    customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'maybe bob';
    // leastFavoriteCustomer = 'not bob';
}


console.log(leastFavoriteCustomer);