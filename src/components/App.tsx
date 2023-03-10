import React, { useState } from "react";
import styled from "styled-components";
import ColorPanel from "./ColorPanel";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const RangeInput = styled.input.attrs({
  type: "range",
})`
  width: 80%;
  margin-bottom: 15px;
`;

const App: React.FC = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(1);

  const handleRedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRed(Number(e.target.value));
  };

  const handleGreenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGreen(Number(e.target.value));
  };

  const handleBlueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlue(Number(e.target.value));
  };

  const handleAlphaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlpha(Number(e.target.value));
  };

  return (
    <AppWrapper>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      <RangeInput
        value={red}
        min={0}
        max={255}
        step={1}
        onChange={handleRedChange}
      />
      <RangeInput
        value={green}
        min={0}
        max={255}
        step={1}
        onChange={handleGreenChange}
      />
      <RangeInput
        value={blue}
        min={0}
        max={255}
        step={1}
        onChange={handleBlueChange}
      />
      <RangeInput
        value={alpha}
        min={0}
        max={1}
        step={0.1}
        onChange={handleAlphaChange}
      />
    </AppWrapper>
  );
};

export default App;
