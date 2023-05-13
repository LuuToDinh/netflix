import PropTypes from 'prop-types';
import { useState } from 'react';

import images from '~/assets/images';

function Image({ className, src, alt, customFallBack = images.noImage, onClick, ...otherProps }) {
    const [sourceImg, setSourceImg] = useState(src);

    const handleError = () => {
        setSourceImg(customFallBack);
    };

    return (
        <img
            className={className}
            src={sourceImg || customFallBack}
            alt={alt}
            onClick={onClick}
            onError={handleError}
            {...otherProps}
        />
    );
}

Image.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    onClick: PropTypes.func,
};

export default Image;
