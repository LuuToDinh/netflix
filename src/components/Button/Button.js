import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    className,
    to = '',
    href = '',
    primary = false,
    outline = false,
    rounded = false,
    large,
    small,
    leftIcon,
    rightIcon,
    onClick,
    ...props
}) {
    let Compo = 'button';

    if (to) {
        Compo = Link;
    } else if (href) {
        Compo = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        large,
        small,
    });

    return (
        <Compo className={classes} to={to} href={href} onClick={onClick} {...props}>
            {leftIcon && <span className={cx('icon', 'left-icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon', 'right-icon')}>{rightIcon}</span>}
        </Compo>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
