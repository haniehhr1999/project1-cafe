import Image from "next/image";
import React from "react";

const ServiceItem = ({ title, description, image, icon }) => {
  // const setIcon = ()=>{
  //   return `<${icon} />`
  // }
  return (
    <div className="flex">
      <Image src={image} width={200} height={200} />
      <div>
        <div className="flex items-center">
          {/* {setIcon()} */}
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
