import { useState } from "react";
import NewFunction from "./New";
function App() {
  const username = "Debottam Talapatra";
  return (
    <>
      <NewFunction />
      <h1>{username}</h1>
    </>
  );
}

export default App;
