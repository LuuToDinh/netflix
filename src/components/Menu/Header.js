import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ children, onBack }) {
    return (
        <div className={cx('header')}>
            <span className={cx('header-icon')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <p className={cx('header-title')}>{children}</p>
        </div>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
