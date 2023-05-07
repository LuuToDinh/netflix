import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './MovieItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const getSourceImg = (path) => {
    return `https://image.tmdb.org/t/p/original${path}`;
};

function MovieItem({ to, data }) {
    return (
        <Link to={'/'} className={cx('movie-item')}>
            <Image className={cx('poster')} src={getSourceImg(data.backdrop_path)} alt="" />

            <div className={cx('info')}>
                <h3 className={cx('name')}>{data.title}</h3>
                <p className={cx('release')}>{data.release_date}</p>
            </div>
        </Link>
    );
}

MovieItem.propTypes = {
    to: PropTypes.string,
    data: PropTypes.object.isRequired,
};

export default MovieItem;
