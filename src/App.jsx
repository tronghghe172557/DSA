import React, { useEffect } from "react";
import AllRoute from "./components/AllRoute";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Day6/1");
  }, []);

  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
