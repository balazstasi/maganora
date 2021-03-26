import _ from "lodash";

// 1. LODASH
// Shallow Copy, azaz feluletes masolas
const object1 = {
  a: {
    b: { x: [1, 2, 3] },
    c: "c",
    d: "d",
  },
};

const a = undefined;

if (a) {
}

// const object2 = object1;
// feluletes masolas alternativa: Object.assign(aobject2, object1);
const object2 = { ...object1 };
object2.a.b.x[0] = 100;
console.log("Object1: ", object1.a.b);
console.log("Object2:", object2.a.b);

// Deep Copy

const object3 = {
  a: {
    b: { x: [1, 2, 3] },
    c: "c",
    d: "d",
  },
};

const object4 = _.cloneDeep(object3);
console.log(object3[0] === object4[0]);

// 2 ClASS_TRANSFORMATOR
