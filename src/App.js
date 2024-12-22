import React from "react";
import BoundingBoxCanvas from "./components/BoundingBoxCanvas";
import BoundingBoxList from "./components/BoundingBoxList";
import FrameNavigator from "./components/FrameNavigator";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="customContainer">
      <Header />
      <BoundingBoxCanvas />
      <FrameNavigator />
      <BoundingBoxList />
    </div>
  );
};

export default App;
