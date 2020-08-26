import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isBanana, toggleIsBanana] = useToggle();

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "banana" : "apple"}</h1>
    </div>
  );
}

export default Toggler;
