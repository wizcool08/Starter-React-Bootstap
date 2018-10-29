import * as React from "react";
import "./App.css";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import Description from "./Description";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavbarLayout />
        <Description countBy={3} />
      </div>
    );
  }
}

export default App;
