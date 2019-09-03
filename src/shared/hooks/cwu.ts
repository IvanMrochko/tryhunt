import { useEffect } from "react";

const componendWillUnmount = callback => {
  useEffect(() => callback, []);
};

export { componendWillUnmount };
