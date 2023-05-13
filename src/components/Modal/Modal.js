import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
            <div className={cx('layer')} onClick={onClick}></div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Modal;
