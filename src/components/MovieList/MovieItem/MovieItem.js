import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../MovieList.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function MovieItem({ data, onClick, onMouseUp, onMouseDown }) {
    return (
        <button className={cx('movie-item')} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
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
    onMouseUp: PropTypes.func,
    onMouseDown: PropTypes.func,
};

export default MovieItem;
