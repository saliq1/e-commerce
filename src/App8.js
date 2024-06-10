

import React, { useState } from "react";

const App8 = () => {
  const [myValue, setMyValue] = useState("");
  const istvalue = [{ name: "salik" }, { name: "aqib" }];

  return (
    <>
      <h1>App8</h1>
      <input
        onChange={(e) => setMyValue(e.target.value)}
        type="text"
        value={myValue}
      />
      <ul>
        {istvalue.map((v, index) => (
          v.name.includes(myValue)?<li key={index}>{v.name}</li>:null

          
        ))}
      </ul>
    </>
  );
};

export default App8;
