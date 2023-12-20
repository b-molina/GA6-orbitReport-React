import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
//task 3.1
import { useState } from "react";
//task 3.2
import satData from "./components/satData";

function App() {
  //task 3.2
  const [sat, setSat] = useState(satData);
  //task 3.4
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  //task 3.5
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
