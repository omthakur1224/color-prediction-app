import React, { useEffect, useState } from 'react';

type Props = {
    setButtonStatus: (args: boolean) => void;
}

const Timer = ({ setButtonStatus }: Props) => {
    console.log(setButtonStatus, "setbutton")

    const initialTime = 30; // Initial time in seconds

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    return initialTime; // Reset time to initial value after reaching 0
                }
            });
        }, 1000);

        if (time <= 20) {
            setButtonStatus(true)
        }
        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return formatTime(time);
};

export default Timer;
