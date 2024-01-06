import { useRef, useState, useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

const IdleTimerContainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const idleTimerRef = useRef(null);
    const sessionTimeoutRef = useRef(null);
    const isComponentMounted = useRef(true);

    useEffect(() => {
        return () => {
            isComponentMounted.current = false;
        };
    }, []);

    const onIdle = () => {
        if (isLoggedIn) {
            setIsModalOpen(true);
            sessionTimeoutRef.current = setTimeout(logOut, 5000);
            console.log("User is idle");
        }
    };

    useIdleTimer({
        ref: idleTimerRef,
        onIdle: onIdle,
        timeout: 5 * 1000,
    });

    const logOut = () => {
        setIsLoggedIn(false);
        setIsModalOpen(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log("User has logged out");
    };

    const stayActive = () => {
        setIsModalOpen(false);
        clearTimeout(sessionTimeoutRef.current);
        if (isComponentMounted.current && idleTimerRef.current) {
            idleTimerRef.current.reset();
            console.log("User is active");
        }
    };

    return (
        <div>
            {isLoggedIn ? <h1>Hello, user!</h1> : <h1>Hello, guest!</h1>}

            <Modal isOpen={isModalOpen}>
                <h2>You've been idle for a while!</h2>
                <p>You'll be logged out soon.</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={stayActive}>Keep me signed in</button>
                </div>
            </Modal>
        </div>
    );
};

export default IdleTimerContainer;
