const code = `import { useState, useEffect, useCallback } from "react";

interface Countdown {
    hours: string;
    minutes: string;
    seconds: string;
}

const useCountdown = (endDate: string): Countdown => {
    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(endDate).getTime() - new Date().getTime();

        if (difference <= 0) {
            return { hours: "00", minutes: "00", seconds: "00" };
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(seconds).padStart(2, "0")
        };
    }, []);

    const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return timeLeft;
};

export default useCountdown;`;

export default code;

export const example = `import useCountdown from "hooks/useCountdown";

const Example = ({ endDate }: { endDate: string }) => {
    const { hours, minutes, seconds } = useCountdown(endDate);

    return (
        <div>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
    );
};

export default Example;
`;
