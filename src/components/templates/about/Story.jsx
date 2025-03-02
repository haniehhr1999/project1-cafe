import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <>
      <div>Story</div>
      <h2 className="text-3xl text-center">about us</h2>
      <div className="md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="">
            <h2 className="text-2xl">Our Story</h2>
            <p className="font-bold">
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button className="rounded bg-slate-600 text-white px-3 py-1">
              learn more
            </button>
          </div>

          <div className="">
            <Image src="" />
          </div>

          <div className="">
            <h2 className="text-2xl">Our Vision</h2>
            <p className="font-bold">
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="rounded bg-slate-600 text-white px-3 py-1">
              learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
