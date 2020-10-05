import React, { useState } from "react";
import Lightbulb from "../../testElement/LightBulb";
import { Grid, Container, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledPage = styled.div`
font-size
  .lightbulb {
    border: 1px solid orange;
    background: yellow;
  }
  .btn {
    border: 3px solid orange;
  }
`;

const StateSnack = () => {
  const [on, setOn] = useState(false);
  return (
    <StyledPage>
      <Container>
        <Lightbulb on={on} />
        <div className="buttons">
          <Button className="btn" onClick={() => setOn(true)}>
            ON
          </Button>
          <Button onClick={() => setOn(false)}>OFF</Button>
        </div>
      </Container>
    </StyledPage>
  );
};

export default StateSnack;
