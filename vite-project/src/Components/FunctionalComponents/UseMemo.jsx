import { useState } from "react";

var slowFunction = (number) => {
  for (let i = 0; i < 10000000000; i++) {}
  return number * 2;
};

var UseMemo = () => {
  var [num, setNum] = useState(0);
  var [theme, updateTheme] = useState(true);

  var darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingNumber = () => {
    return slowFunction(num);
  };

  return (
    <section>
      <h1>This is UseMemo example.</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => updateTheme(theme = !theme)}>Toggle Theme</button>
      <h2 style={darkLight}>{doublingNumber()}</h2>
    </section>
  );
};

export default UseMemo;
