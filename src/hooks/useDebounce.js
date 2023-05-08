import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function useDebounce(value, delay = 700) {
    // Tính chất của useState, useBounce gọi lần đầu tiên sẽ tạo initValue, gọi lần 2 sẽ không tạo initValue nữa
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(idTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounce;
}

useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

export default useDebounce;
