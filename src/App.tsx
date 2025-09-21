import { useState } from "react";
import { Header } from "./Components/Header";
import { Keyboard } from "./Components/Keyboard/Keyboard";
import { SwitchesComponent } from "./Components/Switches/SwitchesComponent";

function App() {
  const [switchSound, setSwitchSound] = useState("gateronRed");

  const handleSwitchSound = (switchName: string) => {
    setSwitchSound(switchName);
  };

  return (
    <>
      <Header></Header>
      <div className="ml-5 flex">
        <Keyboard switchSound={switchSound} />
        <SwitchesComponent value={switchSound} onChange={handleSwitchSound} />
      </div>
    </>
  );
}

export default App;
