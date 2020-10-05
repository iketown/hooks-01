import React from "react";
import { FaLightbulb } from "react-icons/fa";

interface LightBulb {
  on?: boolean;
}

const LightBulb: React.FC<LightBulb> = ({ on }) => {
  return (
    <div className="lightbulb">
      <FaLightbulb color={on ? "orange" : "lightgrey"} size="4rem" />
    </div>
  );
};
export default LightBulb;
