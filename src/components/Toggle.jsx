import React, { useState } from "react";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className="toggleDiv"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <h4>{title}</h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
}

export default Toggle;
