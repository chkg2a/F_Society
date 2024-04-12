import { useEffect, useRef, useState } from "react";

const Error = () => {
  const [text, setText] = useState("PAGE NOT FOUND");
  const ref = "PAGE NOT FOUND"
  const letters = "ABCDEFGHIJKLMNOPQRSTQUVWXYZ";

  useEffect(() => {
    glitchy();
  },[]);

  const glitchy = () => {
    setInterval(()=>{
      let iteration = 0;
      const interval = setInterval(() => {
        setText((prev) =>
          prev.split("")
            .map((letter, index) => {
              if(index < iteration) {
              return ref[index]
            }
              return letters[Math.floor(Math.random() * 26)];
            }).join("")
        );

        if (iteration >= ref.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    }, 2000)
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl">404 PAGE</h1>
        <h2 className="text-3xl">{text}</h2>
      </div>
    </div>
  );
};

export default Error;
