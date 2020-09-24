import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import ExerciseText from "./ExerciseText";

function App() {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < data.length; i++) {
      newTotal += data[i].value;
    }
    setTotal(newTotal);
  }, [data]);

  const increase = (id) => {
    let counters = [...data];
    console.log(counters[id - 1]);
    let counter = { ...counters[id - 1] };
    counter.value += 1;
    counters[id - 1] = counter;

    setData(counters);
  };
  const decrease = (id) => {
    let counters = [...data];
    let counter = { ...counters[id - 1] };
    counter.value -= 1;
    counters[id - 1] = counter;

    setData(counters);
  };
  const change = (value, id) => {
    if (value > 0) {
      increase(id);
    } else {
      decrease(id);
    }
  };

  return (
    <div>
      <ExerciseText />
      <div className="total">Az összes Counter value összege: {total}</div>
      {data.map((counter) => (
        <Counter
          value={counter.value}
          key={counter.id}
          onChange={(value) => change(value, counter.id)}
        />
      ))}
    </div>
  );
}

export default App;
