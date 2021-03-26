import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 20000 },
  { title: "A Book", price: 2000 },
];

const newProd = new Product("", -5.6);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!!!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

console.log("Alap megoldas:");

const productClasses = products.map((p) => new Product(p.title, p.price));
productClasses.forEach((p) => p.getInformation());

console.log("Class Transformer megoldas");

const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
  prod.getInformation();
}
