//optional styling
import "./styling.css";
//task 4.1
import satData from "./satData";

//task 4.2 Pass the props created from the App() function: filterByType, setSat, and displaySats.
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;