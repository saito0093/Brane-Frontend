import React, { useContext, useEffect, useState } from "react";

import "./SpinnerOfDoom.scss";

import { Sync } from "../../assets/icons";
import { DictionaryContext } from "../../contexts/DictionaryContext";

const SpinnerOfDoom = ({ standalone, center, full, top, inner }) => {
  const { dictionary, language } = useContext(DictionaryContext);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if (standalone) {
      const timer = setInterval(() => {
        setDots((current) => {
          if (current.length === 3) {
            return Array(0);
          } else {
            return Array(current.length + 1).fill(0);
          }
        });
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [standalone]);

  return (
    <div
      className={`spinner-of-doom ${standalone ? "standalone" : ""} ${center ? "center" : ""} ${full ? "full" : ""} ${
        top ? "top" : ""
      } ${inner ? "inner" : ""}`}
    >
      <Sync />
      {standalone && (
        <p>
          {dictionary.spinnerOfDoom[language]}
          {` ${dots.map(() => ".").join("")}`}
        </p>
      )}
    </div>
  );
};

export default SpinnerOfDoom;
