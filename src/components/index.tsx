import React, { useState } from "react";
import styled from "styled-components";
import ColorPanel from "./ColorPanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RangeInput = styled.input`
  width: 300px;
  margin: 10px;
`;

const App: React.FC = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(1);

  const handleRedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRed(Number(event.target.value));
  };

  const handleGreenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreen(Number(event.target.value));
  };

  const handleBlueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlue(Number(event.target.value));
  };

  const handleAlphaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlpha(Number(event.target.value));
  };

  return (
    <Container>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      <RangeInput type="range" min="0" max="255" value={red} onChange={handleRedChange} />
      <RangeInput type="range" min="0" max="255" value={green} onChange={handleGreenChange} />
      <RangeInput type="range" min="0" max="255" value={blue} onChange={handleBlueChange} />
      <RangeInput type="range" min="0" max="1" step="0.1" value={alpha} onChange={handleAlphaChange} />
    </Container>
  );
};

export default App;
