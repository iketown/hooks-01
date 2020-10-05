import React, { Component } from "react";
import { render } from "react-dom";
import {Button} from '@material-ui/core'
import StateSnack from './snacks/useState'
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <StateSnack />
       
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
