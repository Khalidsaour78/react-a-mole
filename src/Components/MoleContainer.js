import { useState, useEffect } from "react";
import Mole from "./Mole";
import Empty from "./Empty";
import trace from "../helper";

function MoleContainer() {
  return (
    <div>
      <span>Mole Container</span>
      <Mole />
      <Empty />
    </div>
  );
}

export default MoleContainer;