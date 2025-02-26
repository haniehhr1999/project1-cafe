import Image from "next/image";
import React from "react";

const Card = ({item}) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        className="rounded-full"
        src={item.img}
        alt={item.title}
        width={100}
        height={100}
      />
      <div>
        <h3>
          {item.title} - {item.price}
        </h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;
