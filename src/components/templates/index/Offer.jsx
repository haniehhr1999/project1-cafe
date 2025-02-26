import React, { useState } from "react";

const Offer = () => {
  const [email, setEmail] = useState("");

  const joinToUs = async(e) => {
    e.preventDefault();

    const newEmail = {
        email
    }

    const res = await fetch('http://localhost:9000/newsLetters' , {
        method :"POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newEmail)
    })
    if (res.ok) {
        alert('user added successfully')
        setEmail('')
    }
    const data = res.json()
    console.log(data)
  };

  return (
    <div className="flex flex-col items-center">
      <h1>50% Off</h1>
      <div>sunday official offer</div>
      <div>only for sunday 2025/12/3 to 2025/12/9</div>

      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={joinToUs}>sign up</button>
      </form>
    </div>
  );
};

export default Offer;
