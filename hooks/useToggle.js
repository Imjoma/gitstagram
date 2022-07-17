import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);
  const toggleState = () => setState((prev) => !prev);
  const resetState = () => setState(false);
  return { state, toggleState, resetState };
};

export default useToggle;
