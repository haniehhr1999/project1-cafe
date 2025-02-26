import Card from "@/components/modules/card/Card";
import Image from "next/image";
import React from "react";

const Menu = ({ data }) => {
  console.log("menu =>", data);
  return (
    <div className="flex justify-center gap-9">
      <div className="flex flex-col">
        <h2 className="text-2xl">hot coffee</h2>
        {data
          .filter((item) => item.type === "hot")
          .slice(0, 3)
          .map((item) => (
            <Card item={item} />
          ))}
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl">cold coffee</h2>
        {data
          .filter((item) => item.type === "cold")
          .slice(0, 3)
          .map((item) => (
            <Card item={item} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
