import React from "react";

const Reservation = () => {
  return (
    <div className="flex gap-5">
      <div className="w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum,
        temporibus sint dolor ipsum vero quos at, esse fugiat, porro ea fuga
        ullam? Nesciunt, aperiam, aliquam doloremque perferendis excepturi
        quibusdam maxime asperiores temporibus eveniet corporis tempore
        obcaecati iusto culpa aut itaque doloribus dolor adipisci suscipit
        laboriosam voluptates officiis neque rerum unde cum. Explicabo eveniet
        harum id libero commodi ullam consequuntur? Quasi iure iste distinctio
        harum reprehenderit, corporis suscipit earum commodi quos beatae nostrum
        aliquid ex reiciendis itaque illo ipsam in neque maxime nulla impedit
        perspiciatis, assumenda hic. Sunt nisi eum consectetur, itaque, eligendi
        sequi voluptatem odio corporis suscipit perspiciatis officiis.
      </div>
      <div className="w-1/2">
        <h2>book your table</h2>
        <input type="text" className="w-full" placeholder="name" />
        <input type="text" className="w-full" placeholder="date" />
        <input type="text" className="w-full" placeholder="email" />
        <input type="text" className="w-full" placeholder="time" />
        <input type="text" className="w-full" placeholder="person" />
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Reservation;
