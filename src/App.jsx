import "./App.css";
import AreaChart from "./components/AreaChart/AreaChart";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";


function App() {
  return (
    <>
      
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <AreaChart></AreaChart>
      
    </>
  );
}

export default App;
