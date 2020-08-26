import { useState } from "react";

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    // logika ide jon
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
