import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
                isClearable
            />
        </div>
    );
}

export default App;
