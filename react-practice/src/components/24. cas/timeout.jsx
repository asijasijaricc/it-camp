import { useEffect, useState } from "react";

const Timeout = () => {
  const [text, setText] = useState(new Date().toTimeString());

  useEffect(() => {
    const Intervalid = setInterval(() => {
      setText(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(Intervalid);
    };
  });

  return <div>{text}</div>;
};

export default Timeout;
