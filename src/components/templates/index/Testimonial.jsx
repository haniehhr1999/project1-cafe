import Image from "next/image";
import React from "react";

const Testimonial = ({ data }) => {
  return (
    <div>
      <h4>testimonial</h4>
      <h1>Our Clients say</h1>
      {data.map((item) => (
        <div className="flex">
          <Image src={item.profile} width={80} height={80} />
          <div>
            <div>{item.username}</div>
            <div>{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
