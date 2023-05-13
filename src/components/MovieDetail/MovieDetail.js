import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import Button from '../Button/Button';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function MovieDetail({ data }) {
    return (
        <div
            className={cx('wrapper')}
            style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_URL + data.backdrop_path})` }}
        >
            <div className={cx('content')}>
                <h1 className={cx('title')}>{data.title}</h1>
                <p className={cx('overview')}>{data.overview}</p>
                <div className={cx('more-info')}>
                    <div className={cx('vote')}>
                        <p className={cx('rating')}>Rating: {data.vote_average}</p>
                        <p className={cx('vote-count')}>Number of votes: {data.vote_count}</p>
                    </div>
                    <div className={cx('view-and-release')}>
                        <p className={cx('view')}>View: {data.popularity}</p>
                        <p className={cx('release-date')}>Release date: {data.release_date}</p>
                    </div>
                </div>

                <div className={cx('action-btn')}>
                    <Button className={cx('icon', 'play-btn')} leftIcon={<FontAwesomeIcon icon={faPlay} />}>
                        PLAY
                    </Button>
                    <Button className={cx('icon', 'add-btn')} outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        MY LIST
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
