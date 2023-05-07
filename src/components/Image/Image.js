import PropTypes from 'prop-types';
import { useState } from 'react';

import images from '~/assets/images';

function Image({ className, src, alt, customFallBack = images.noImage, onClick, ...otherProps }) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={className}
            src={fallBack || src}
            alt={alt}
            onClick={onClick}
            onError={handleError}
            {...otherProps}
        />
    );
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    onClick: PropTypes.func,
};

export default Image;
