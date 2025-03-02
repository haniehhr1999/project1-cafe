import React from "react";

const Pricing = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <h1>menu</h1>
      <h1>hot bar</h1>
      <div className="grid grid-cols-3 gap-8 px-40">
        {data
          ?.filter((item) => item.type === "hot")
          .map((item) => (
            <div className="shadow-md rounded-md">
              <img className="w-full rounded-md" src={item.img} alt="" />
              <div className="p-5">
                <h2>
                  {item.title} - {item.price}
                </h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        
      </div>


      <h1>cold bar</h1>
      <div className="grid grid-cols-3 gap-8 px-40">
        {data
          ?.filter((item) => item.type === "cold")
          .map((item) => (
            <div className="shadow-md rounded-md">
              <img className="w-full rounded-md" src={item.img} alt="" />
              <div className="p-5">
                <h2>
                  {item.title} - {item.price}
                </h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Pricing;
