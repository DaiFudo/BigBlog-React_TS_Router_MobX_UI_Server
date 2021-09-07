import React from "react";
//import { ReactInputEvent } from "./events";

const onInputHandler = async (e: any) => {
  e.preventDefault();
  console.log(e.target);
};
/* e: ReactInputEvent|null, */

export default onInputHandler;
