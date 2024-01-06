import React from "react";
import CountUp, { useCountUp } from "react-countup";
import "./App.css";

function App() {
    const countUpRef = React.useRef(null);

    const { pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        end: 1234567,
        delay: 1000,
        duration: 5,
        onReset: () => console.log("Resetted!"),
        onUpdate: () => console.log("Updated!"),
        onPauseResume: () => console.log("Paused or resumed!"),
    });

    return (
        <div className="App">
            <div>
                <div ref={countUpRef} />
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Start / Pause</button>
                <button onClick={() => update(2000)}>Update to 2000</button>
            </div>

            <h1>
                <CountUp end={200} />
            </h1>

            <h1>
                <CountUp
                    end={200}
                    duration={5}
                />
            </h1>

            <h1>
                <CountUp
                    start={500}
                    end={1000}
                    duration={5}
                />
            </h1>

            <h1>
                <CountUp
                    end={1000}
                    duration={5}
                    prefix="$"
                    decimals={2}
                />
            </h1>

            <h1>
                <CountUp
                    end={1000}
                    duration={5}
                    suffix=" USD"
                    decimals={2}
                />
            </h1>
        </div>
    );
}

export default App;
