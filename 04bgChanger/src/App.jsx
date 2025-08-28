import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colorArr = ["red", "blue", "green", "purple", "pink", "orange", "teal"];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorArr.map((key, index) => (
              <button
                key={key}
                onClick={() => setColor(key)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: key }}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
