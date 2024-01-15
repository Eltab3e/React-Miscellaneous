import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import "./App.css";

function App() {
    return (
        <div className="App">
            <LineChart />
            <BarChart />
            <DoughnutChart />
        </div>
    );
}

export default App;
