import classNames from 'classnames/bind';

import styles from './Movies.module.scss';

const cx = classNames.bind(styles);

function Movies() {
    return <div className={cx('wrapper')}>Movies page</div>;
}

export default Movies;
