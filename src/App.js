import "./App.css";
import MinDash from "./components/MinDash/MinDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebare from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app-glass">
        <Sidebare />
        <MinDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
