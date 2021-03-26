import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 20000 },
  { title: "A Book", price: 2000 },
];

console.log("Alap megoldas:");

const productClasses = products.map((p) => new Product(p.title, p.price));
productClasses.forEach((p) => p.getInformation());

console.log("Class Transformer megoldas");

const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
  prod.getInformation();
}
