import { useState, useEffect } from 'react';

function useDisplay(elementRef, initialState, display) {
    const [isElementDisplay, setElementDisplay] = useState(initialState);

    // control visibility status of button
    useEffect(() => {
        if (elementRef.current) {
            if (isElementDisplay) {
                elementRef.current.style.display = display;
                return;
            }
            elementRef.current.style.display = 'none';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isElementDisplay]);

    return { setElementDisplay };
}

export default useDisplay;
