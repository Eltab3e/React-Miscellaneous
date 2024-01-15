import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BounceLoader
                size={24}
                color="green"
                loading
            />
            <BarLoader
                size={48}
                color="yellow"
                loading
            />
            <BeatLoader
                size={72}
                color="red"
                loading
            />
        </div>
    );
}

export default App;
