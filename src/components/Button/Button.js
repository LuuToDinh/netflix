import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ children, className, to = '', href = '', onClick, ...props }) {
    let Compo = 'button';

    if (to) {
        Compo = Link;
    } else if (href) {
        Compo = 'a';
    }

    return (
        <Compo className={className} to={to} href={href} {...props}>
            {children}
        </Compo>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
