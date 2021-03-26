// const names: string[] = ["valami"];
const names: Array<string> = ["valami a b c"];
console.log(names[0].split(" "));

// promise
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

// fg
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const obj1 = { name: "Balazs", hobbies: ["yugioh"] };
const obj2 = { age: 30 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);

// pelda fg

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log("Value " + obj[key]);
}

extractAndConvert({ name: "Max", age: 111 }, "name");

// const obj111: any = {
//   a: 15,
//   b: 12,
// };
// console.log(Object.keys(obj111).forEach((key) => console.log(obj111[key])));

// class geneerikusok

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  // private data: string[] | number[] | boolean[] = ["asd"];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Balazs");
textStorage.addItem("valami");
textStorage.addItem("valami2");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// partial

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;

  return courseGoal as CourseGoal;
}
