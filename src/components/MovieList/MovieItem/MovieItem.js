import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../MovieList.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function MovieItem({ data, onClick }) {
    return (
        <button className={cx('movie-item')} onClick={onClick}>
            <Image
                className={cx('thumbnail')}
                src={data.backdrop_path && process.env.REACT_APP_IMG_URL + data.poster_path}
            />
        </button>
    );
}

MovieItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MovieItem;
