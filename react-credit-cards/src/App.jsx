import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./App.css";

function App() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    return (
        <div className="App">
            <Cards
                number={number}
                name={name}
                expiry={expiration}
                cvc={cvc}
                focused={focus}
            />

            <form>
                <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <input
                    type="text"
                    name="expiration"
                    placeholder="MM/YY Expiry"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
            </form>
        </div>
    );
}

export default App;
