import ServiceItem from "@/components/modules/serviceItem/ServiceItem";
import React from "react";

import { FaTruck } from "react-icons/fa";

const Services = ({data}) => {
  return (
    <div>
      <h2 className="text-3xl text-center">our services</h2>
      <h2 className="text-3xl text-center">fresh & organic bins</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
          data.map(item => <ServiceItem description={item.desc} title={item.title} image={item.img} icon={item.icon} />)
        }
      </div>
    </div>
  );
};

export default Services;
