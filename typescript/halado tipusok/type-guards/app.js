function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: ", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: ", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: ", emp.startDate);
    }
}
printEmployeeInfo({ name: "Valaki", startDate: new Date() });
printEmployeeInfo({ name: "Valaki", privileges: ["start-server"] });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving A Truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo: ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(12);
    }
}
useVehicle(v1);
useVehicle(v2);
