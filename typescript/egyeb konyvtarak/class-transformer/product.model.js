"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this.price = p;
    }
    Product.prototype.getInformation = function () {
        console.log([this.title, "" + this.price]);
    };
    return Product;
}());
exports.Product = Product;
