import React from "react";

import NewAsset from "./components/NewAsset/NewAsset";
import Asset from "./components/Asset/Asset";

import "./components/UI/Font.css";
import "./components/UI/Button.css";

const App = () => {
  return (
    <>
      <NewAsset />
      <Asset />
    </>
  );
};

export default App;
