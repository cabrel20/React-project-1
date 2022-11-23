import React, { Fragment } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";

function CardItem({ img, name, profession, description }) {
  return (
    <Fragment>
      <div className="flex flex-col items-center w-full h-full">
        <div className="rounded-full border-r-8 border-blue-400 w-46 h-36 bg-blue-400 relative">
          <img
            src={img}
            alt="person"
            className="rounded-full w-36 h-36 object-cover"
          />
          <BsFillChatQuoteFill
            size={35}
            className="text-blue-400 absolute top-0"
          />
        </div>
        <div className="text-center mt-3">
          <h1 className="text-gray-800 text-md">{name}</h1>
          <h2 className="text-blue-400 uppercase text-md font-light mt-2">
            {profession}
          </h2>
          <p className="text-sm text-gray-500 my-1">{description}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default CardItem;
