import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

const usePrism = () => {
  useEffect(() => {
    Prism.highlightAll();
  });
};

export default usePrism;
