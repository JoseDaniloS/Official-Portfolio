import { useState, useEffect } from "react";

export function useVisibilityState() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (document.visibilityState === "visible") {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, []);

    return { showContent };
}