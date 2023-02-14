import { useState, useEffect } from 'react';

function useOpacity(elementRef, initialState) {
    const [isElementVisibility, setElementVisibility] = useState(initialState);

    // control visibility status of button
    useEffect(() => {
        if (elementRef.current) {
            if (isElementVisibility) {
                elementRef.current.style.opacity = 1;
                return;
            }
            elementRef.current.style.opacity = 0;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isElementVisibility]);

    return { setElementVisibility };
}

export default useOpacity;
