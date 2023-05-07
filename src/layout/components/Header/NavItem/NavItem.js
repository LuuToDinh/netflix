import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

function NavItem({ className, children, to }) {
    return (
        <NavLink className={(nav) => cx(className, 'link', { active: nav.isActive })} to={to}>
            {children}
        </NavLink>
    );
}

NavItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default NavItem;
