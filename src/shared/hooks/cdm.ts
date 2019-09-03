import { useEffect } from "react";

const componentDidMount = callback => {
  useEffect(() => {
    callback();
  }, []);
};

export { componentDidMount };
