import Button from "@mui/material/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const QuantityBox = () => {

  const [inputVal, setInputVal] = useState(1);


  const plus = () => {
    setInputVal(inputVal + 1);
  };

  const minus = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };

  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={minus}>
        <FaMinus />
      </Button>
      <input type="text" value={inputVal} />
      <Button onClick={plus}>
        <FaPlus />
      </Button>
    </div>
  );
};


export default QuantityBox;
