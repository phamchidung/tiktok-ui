import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);

        // eslint-disable-next-line
    }, [value]);

    return debouncedValue;
}

useDebounce.propTypes = {
    value: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
};

export default useDebounce;
