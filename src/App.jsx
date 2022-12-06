import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [productInfo, setProductInfo] = useState("");

  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="bg-opacity"></div>
      <Header
        productInfo={productInfo}
        count={count}
        setProductInfo={setProductInfo}
      />
      <Main
        setProductInfo={setProductInfo}
        handleCountMinus={handleCountMinus}
        handleCountPlus={handleCountPlus}
        count={count}
      />
    </>
  );
}

export default App;
