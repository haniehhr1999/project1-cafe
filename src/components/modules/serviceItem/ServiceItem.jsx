import Image from "next/image";
import React from "react";

const ServiceItem = ({ service }) => {

  
  return (
    <div className="flex">
      <Image src={service.image} width={200} height={200} alt={service.title} />
      <div>
        <div className="flex items-center">
          <h4>{service.title}</h4>
        </div>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
