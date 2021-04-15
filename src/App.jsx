import React from "react";
import { Header } from "./core/components";

// Router
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Router />
      </div>
    </div>
  );
};

export default App;
