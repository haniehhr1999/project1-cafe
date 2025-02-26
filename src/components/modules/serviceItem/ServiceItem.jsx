import Image from "next/image";
import React from "react";

const ServiceItem = ({ title, description, image, icon }) => {
  return (
    <div className="flex">
      <Image src={image} />
      <div>
        <div className="flex items-center">
          {icon}
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
