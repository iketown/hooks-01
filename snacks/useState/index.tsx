import React, { useState } from "react";
import Lightbulb from "../../testElement/LightBulb";
import { Grid, Container, Button } from "@material-ui/core";
import "./statesnack";

const StateSnack = () => {
  const [lightOn, setLightOn] = useState(false);

  const handleOn = () => {}
  const handleOff = () => {}
  const handleToggle = () => {}

  return (
    <Container className="container">
      <Lightbulb lightOn={lightOn} />
      <div className="buttons">
        <Button onClick={handleOn}>ON</Button>
        <Button onClick={handleOff} >OFF</Button>
        <Button onClick={handleToggle} >TOGGLE</Button>
      </div>
    </Container>
  );
};

export default StateSnack;
