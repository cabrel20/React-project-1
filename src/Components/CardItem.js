import React, { Fragment, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

function CardItem({ title, text }) {
  let [isClick, setIsClick] = useState(false);
  let button;
  if (isClick === false) {
    button = <AiFillPlusCircle size={35} />;
  } else {
    button = <AiFillMinusCircle size={35} />;
  }
  const clickHandler = () => {
    setIsClick(!isClick);
  };
  return (
    <Fragment>
      <div className="shadow rounded-lg px-lg-2 py-lg-3 mt-4 container ">
        <div className="row align-items-center">
          <div className="col-8 col-lg-8 col-md-8 py-2">
            <h1 className="font-bold text-gray-900 pr-2">{title}</h1>
          </div>
          <div className="col-4 col-lg-4 col-md-4 py-2">
            <button
              onClick={clickHandler}
              className="text-gray-400 hover:text-gray-600"
            >
              {button}
            </button>
          </div>
        </div>
        <div className={`py-2 text-sm  ${!isClick && "hidden"}`}>{text}</div>
      </div>
    </Fragment>
  );
}

export default CardItem;
