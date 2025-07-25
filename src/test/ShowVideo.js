import { useState } from "react";

const theDay = () => {
  let [isTired, setIsTired] = useState(true);
  let [isSleepy, setIsSleepy] = useState(false);

  if (isTired) {
    console.log("☕ コーヒーを飲む");
    setIsTired(false);
    setIsSleepy(true);
  }

  if (isSleepy) {
    console.log("💤 寝る");
    isSleepy = false;
  }
};

theDay();
