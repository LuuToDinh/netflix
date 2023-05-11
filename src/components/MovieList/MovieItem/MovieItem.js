import classNames from 'classnames/bind';
import styles from '../MovieList.module.scss';

const cx = classNames.bind(styles);

function MovieItem({ data }) {
    return <div className={cx('movie-item')}>{data.original_title}</div>;
}

export default MovieItem;
