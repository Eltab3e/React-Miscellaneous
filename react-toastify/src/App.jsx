import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    const notify = () => {
        toast("Basic Notification!");
        toast.success("Success Notification!");
        toast.info("Info Notification!");
        toast.warning("Warning Notification!");
        toast.error("Error Notification!");
    };

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer theme="dark" />
        </div>
    );
}

export default App;
