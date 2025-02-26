import ServiceItem from "@/components/modules/serviceItem/ServiceItem";
import React from "react";

import { FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">our services</h2>
      <h2 className="text-3xl text-center">fresh & organic bins</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ServiceItem description="nbvgfhgfgfhdfdhgdfhfjghgkhgiytyudttfitou" title="qwe" image="" icon={<FaTruck/>} />
        <ServiceItem description="nbvgfhgfgfhdfdhgdfhfjghgkhgiytyudttfitou" title="qwe" image="" icon={<FaTruck/>} />
        <ServiceItem description="nbvgfhgfgfhdfdhgdfhfjghgkhgiytyudttfitou" title="qwe" image="" icon={<FaTruck/>} />
        <ServiceItem description="nbvgfhgfgfhdfdhgdfhfjghgkhgiytyudttfitou" title="qwe" image="" icon={<FaTruck/>} />
      </div>
    </div>
  );
};

export default Services;
