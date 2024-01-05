import { IconContext } from "react-icons/lib";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";

import "./App.css";

function App() {
    return (
        <IconContext.Provider value={{ size: "10rem" }}>
            <div>
                <FaHtml5 color="orange" />
                <FaCss3 color="blue" />
                <FaReact color="purple" />
            </div>
        </IconContext.Provider>
    );
}

export default App;
