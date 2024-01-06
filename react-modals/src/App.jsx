import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); //We need to add this line for accessibility

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "black",
                    },
                    content: {
                        color: "orange",
                    },
                }}
            >
                <h1>Modal Title</h1>
                <p>Modal Body</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

export default App;
