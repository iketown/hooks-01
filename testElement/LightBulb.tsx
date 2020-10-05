import React from "react";
import { FaLightbulb } from "react-icons/fa";

interface LightBulb {
  lightOn?: boolean;
}

const LightBulb: React.FC<LightBulb> = ({ lightOn }) => {
  return (
    <div className="lightbulb">
      <FaLightbulb color={lightOn ? "orange" : "lightgrey"} size="4rem" />
    </div>
  );
};
export default LightBulb;
