import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [productInfo, setProductInfo] = useState("");

  return (
    <>
      <div className="bg-opacity"></div>
      <Header productInfo={productInfo} />
      <Main setProductInfo={setProductInfo} />
    </>
  );
}

export default App;
