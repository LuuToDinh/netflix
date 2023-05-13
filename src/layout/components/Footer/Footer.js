import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            Copyright (c) 2023 -&nbsp;
            <a className={cx('copyright-link')} href="https://github.com/LuuToDinh/netflix">
                Link github
            </a>
        </footer>
    );
}

export default Footer;
