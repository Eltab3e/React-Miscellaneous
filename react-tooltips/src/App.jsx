import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";

const CustomChild = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}
        >
            <h3>This is a very interesting header</h3>

            <p>Here's some interesting stuff:</p>

            <ul style={{ textAlign: "left" }}>
                <li>Some</li>
                <li>Interesting</li>
                <li>Stuff</li>
            </ul>
        </div>
    );
};

function App() {
    return (
        <div>
            <a data-tooltip-id="my-tooltip">◕‿‿◕</a>

            <Tooltip id="my-tooltip">
                <CustomChild />
            </Tooltip>
        </div>
    );
}

export default App;
