import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Logo } from '~/components/Icon';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('navigation')}>
                <Logo className={cx('logo')} />
                <Link to={routes.TVShow}>TV Show</Link>
                <Link to={routes.Movies}>Movies</Link>
                <Link to={routes.RecentlyAdd}>Recently Add</Link>
                <Link to={routes.Mylist}>My list</Link>
            </nav>
        </div>
    );
}

export default Header;
