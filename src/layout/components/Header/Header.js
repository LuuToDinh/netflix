import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Logo, Notify } from '~/components/Icon';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import routes from '~/config/routes';
import NavItem from './NavItem/NavItem';
import Search from '~/layout/components/Search';

const cx = classNames.bind(styles);

function Header() {
    const [darkBackground, setDarkBackground] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setDarkBackground(true);
        } else {
            setDarkBackground(false);
        }
    };

    // Chỉ tạo duy nhất một lần khi được mounted
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Bỏ lắng nghe sự kiện khi bị unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={cx('wrapper')}
            style={{ backgroundColor: darkBackground ? 'var(--background-color--dark)' : 'transparent' }}
        >
            <nav className={cx('navigation')}>
                <Link className={cx('link')} to={routes.Home}>
                    <Logo className={cx('logo')} />
                </Link>

                <NavItem to={routes.Home}>Home</NavItem>
                <NavItem to={routes.TVShow}>TV Show</NavItem>
                <NavItem to={routes.Movies}>Movies</NavItem>
                <NavItem to={routes.RecentlyAdd}>Recently add</NavItem>
                <NavItem to={routes.Mylist}>Mylist</NavItem>
            </nav>
            <div className={cx('user')}>
                <Search />

                <button className={cx('noti-btn', 'btn')}>
                    <Notify />
                </button>
                <img
                    className={cx('user-btn', 'btn')}
                    src="https://avatars.githubusercontent.com/u/239676?s=64&v=4"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;
