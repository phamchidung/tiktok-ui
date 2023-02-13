import { useState, useEffect } from 'react';

function useOpacity(controlRef, initialState) {
    const [isControlVisibility, setControlVisibility] = useState(initialState);

    // control visibility status of button
    useEffect(() => {
        if (controlRef.current) {
            if (isControlVisibility) {
                controlRef.current.style.opacity = 1;
                return;
            }
            controlRef.current.style.opacity = 0;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isControlVisibility]);

    return { setControlVisibility };
}

export default useOpacity;
