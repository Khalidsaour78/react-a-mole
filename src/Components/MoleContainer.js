
import { useState, useEffect } from "react";
import Mole from "./Mole";
import Empty from "./Empty";

function MoleContainer(props) {
  const [displayMole, updateDisplayMole] = useState(false);

  useEffect(() => {

    const randomNumber = Math.floor(Math.random() * 5000);
    const timer = setTimeout(() => {
      updateDisplayMole(true);
    }, randomNumber);

    return () => {
      clearTimeout(timer);
    };
  }, [displayMole]);

  const moleOnClick = (e) => {

    props.setScore(props.score + 1);
    updateDisplayMole(false);
  };

  const show = displayMole ? <Mole moleOnClick={moleOnClick} /> : <Empty />;

  return (
    <div>
      {show}
    </div>
  );
}

export default MoleContainer;
