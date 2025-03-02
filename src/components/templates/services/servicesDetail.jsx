import ServiceItem from "@/components/modules/serviceItem/ServiceItem";
import React from "react";

const ServicesDetail = ({services}) => {
  console.log(services)
  return (
    <div >
      {
        services.map(service => <ServiceItem service = {service}/> )
      }
    </div>
  );
};

export default ServicesDetail;
