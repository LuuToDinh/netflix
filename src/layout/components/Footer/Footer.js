import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            © 2023 Made with ❤️ by &nbsp;
            <a className={cx('copyright-link')} href="https://github.com/LuuToDinh/netflix">
                Luu To Dinh
            </a>
        </footer>
    );
}

export default Footer;
