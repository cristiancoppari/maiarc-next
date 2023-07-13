import { useState, useEffect } from "react";

export default function useDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize(); // Call once to set initial state

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return [isDesktop, setIsDesktop];
}
