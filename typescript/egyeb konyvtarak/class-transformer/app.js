"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var product_model_1 = require("./product.model");
var products = [
    { title: "A Carpet", price: 20000 },
    { title: "A Book", price: 2000 },
];
console.log("Alap megoldas:");
var productClasses = products.map(function (p) { return new product_model_1.Product(p.title, p.price); });
productClasses.forEach(function (p) { return p.getInformation(); });
console.log("Class Transformer megoldas");
var loadedProducts = class_transformer_1.plainToClass(product_model_1.Product, products);
for (var _i = 0, loadedProducts_1 = loadedProducts; _i < loadedProducts_1.length; _i++) {
    var prod = loadedProducts_1[_i];
    prod.getInformation();
}
