// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function useDebounce(value, delay = 700) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(idTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    console.log(value);
    return debounce;
}

// useDebounce.propTypes = {
//     value: PropTypes.string.isRequired,
//     delay: PropTypes.number,
// };

function A(params) {
    console.log(useDebounce('aa'));
    console.log(useDebounce('bb'));
}
