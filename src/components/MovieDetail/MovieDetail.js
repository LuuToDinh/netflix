import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';

const cx = classNames.bind(styles);

function MovieDetail() {
    return <div className={cx('wrapper')}>Content</div>;
}

export default MovieDetail;
