import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type TrafficLigthColor = keyof typeof colors;

export const useTrafficLigth = () => {

    const [light, setLight] = useState<TrafficLigthColor>('red');
    const [countdown, setCountdown] = useState(5);

    // countdown effect 
    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown]);

    // change ligth color effect 
    useEffect(() => {
        if (countdown > 0) return;
        setCountdown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }

        if (light === 'green') {
            setCountdown(2);
            setLight('yellow');
            return;
        }

        if (light === 'yellow') {
            setLight('red');
            return;
        }
    }, [countdown, light]);


    return {
        colors,
        countdown,
        light
    }
}
