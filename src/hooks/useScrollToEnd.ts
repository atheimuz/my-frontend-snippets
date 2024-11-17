const code: string = `"use client";

import { useEffect, useState } from "react";

const useScrollToEnd = (): boolean => {
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.body.offsetHeight;

        if (scrollPosition >= bottomPosition - 100) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isBottom;
};

export default useScrollToEnd;`;

export default code;

export const example: string = `"use client"

import useScrollToEnd from "hooks/useScrollToEnd";

const Example = () => {
    const isScrollEnd = useScrollToEnd();

    // ...
};

export default Example;`;
