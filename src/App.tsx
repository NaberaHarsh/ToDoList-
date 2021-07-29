import Home from "./Components/home";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
