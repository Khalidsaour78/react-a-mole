//

import MoleImage from '../images/mole.png'

// import trace from "../helper";


function Mole(props) {

  return (
    <div className="mole" onClick={props.moleOnClick}>
      <img src={MoleImage} alt="Mole"/>
    </div>
  );
}

export default Mole;
