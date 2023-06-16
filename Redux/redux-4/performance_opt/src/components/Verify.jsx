import React, { useEffect, useMemo, useState } from "react";

const Verify = () => {
  const [count, setCount] = useState(0);

  const ChangeColor = (delay) => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, delay);
  };

  const isDone = useMemo(() => ChangeColor(4000));

  return (
    <div style={{ border: "1px solid black" }}>
      <div>Count :{count}</div>
      <div style={{ backgroundColor: count % 2 === 0 ? "Yellow" : "green" }}>
        Content
      </div>
    </div>
  );
};

export default React.memo(Verify);
