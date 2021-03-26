"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
// Shallow Copy, azaz feluletes masolas
var object1 = {
    a: {
        b: { x: [1, 2, 3] },
        c: "c",
        d: "d",
    },
};
var a = undefined;
if (a) {
}
// const object2 = object1;
// feluletes masolas alternativa: Object.assign(aobject2, object1);
var object2 = __assign({}, object1);
object2.a.b.x[0] = 100;
console.log("Object1: ", object1.a.b);
console.log("Object2:", object2.a.b);
// Deep Copy
var object3 = {
    a: {
        b: { x: [1, 2, 3] },
        c: "c",
        d: "d",
    },
};
var object4 = lodash_1.default.cloneDeep(object3);
console.log(object3[0] === object4[0]);
