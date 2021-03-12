const fetchedData = {
  id: "12312313",
  name: "Balazs",
  job: {
    title: undefined,
    description: "React Developer",
  },
};

console.log(fetchedData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
