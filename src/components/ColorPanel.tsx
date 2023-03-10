import React from "react";
import styled from "styled-components";

interface Props {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const ColorSquare = styled.div<{ color: string }>`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.color};
`;

const ColorPanel: React.FC<Props> = ({ red, green, blue, alpha }) => {
  const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return <ColorSquare color={color} />;
};

export default ColorPanel;
