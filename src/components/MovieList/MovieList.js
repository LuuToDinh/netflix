import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MovieList.module.scss';
import { getMovieList } from '~/services';
import MovieItem from './MovieItem';
import Button from '../Button/Button';
import Modal from '~/components/Modal';
import MovieDetail from '../MovieDetail';

const cx = classNames.bind(styles);

// > 90 will trigger the dragging of the movie list
const draggableDistance = 90;
function MovieList({ className, topic = 'Popular', path = '/movie/popular' }) {
    const [moiveList, setMovieList] = useState([]);
    const [dataMovieDetail, setDataMovieDetail] = useState({});
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    let isDrag = false;
    let startClientX = 0;
    let endClientX = 0;
    let startClientXMovie = 0;
    let endClientXMovie = 0;

    const currentList = useRef();

    const handlePrevList = () => {
        const movieCarouselList = currentList.current;
        const currentCarouselIndex = parseInt(getComputedStyle(movieCarouselList).getPropertyValue('--carousel-index'));
        const maxMovieItems = parseInt(getComputedStyle(movieCarouselList).getPropertyValue('--max-movie-items'));
        const maxCarouselIndex = Math.ceil(movieCarouselList.childElementCount / maxMovieItems) - 1;

        if (currentCarouselIndex <= 0) {
            movieCarouselList.style.setProperty('--carousel-index', maxCarouselIndex);
        } else {
            movieCarouselList.style.setProperty('--carousel-index', currentCarouselIndex - 1);
        }
    };

    const handleNextList = () => {
        const movieCarouselList = currentList.current;
        const currentCarouselIndex = parseInt(getComputedStyle(movieCarouselList).getPropertyValue('--carousel-index'));
        const maxMovieItems = parseInt(getComputedStyle(movieCarouselList).getPropertyValue('--max-movie-items'));
        const maxCarouselIndex = Math.ceil(movieCarouselList.childElementCount / maxMovieItems) - 1;

        if (currentCarouselIndex >= maxCarouselIndex) {
            movieCarouselList.style.setProperty('--carousel-index', 0);
        } else {
            movieCarouselList.style.setProperty('--carousel-index', currentCarouselIndex + 1);
        }
    };

    const handleStartDrag = (e) => {
        e.preventDefault();
        startClientX = e.clientX;
        isDrag = true;
    };

    const handleEndDrag = (e) => {
        endClientX = e.clientX;

        if (isDrag && Math.abs(endClientX - startClientX) > draggableDistance) {
            if (endClientX > startClientX) {
                handlePrevList();
            } else {
                handleNextList();
            }
        }

        isDrag = false;
    };

    const handleMovieDetail = (e, data) => {
        if (Math.abs(startClientXMovie - endClientXMovie) <= draggableDistance) {
            setIsShowMovieDetail(!isShowMovieDetail);
            setDataMovieDetail(data);
        }
    };

    useEffect(() => {
        const movieCarouselList = currentList.current;

        movieCarouselList.addEventListener('mousedown', handleStartDrag);
        movieCarouselList.addEventListener('mouseup', handleEndDrag);
        movieCarouselList.addEventListener('mouseleave', handleEndDrag);

        return () => {
            movieCarouselList.removeEventListener('mousedown', handleStartDrag);
            movieCarouselList.removeEventListener('mouseup', handleEndDrag);
            movieCarouselList.removeEventListener('mouseleave', handleEndDrag);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchApi = async (path) => {
            const response = await getMovieList({ path });

            setMovieList(response.results);
        };

        fetchApi(path);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <nav className={cx('wrapper', className)}>
            <h2 className={cx('topic')}>{topic}</h2>
            <div className={cx('movie-carosel')}>
                <div className={cx('movie-list')} ref={currentList}>
                    {moiveList.map((result) => (
                        <MovieItem
                            key={result.id}
                            data={result}
                            onMouseDown={(e) => {
                                startClientXMovie = e.clientX;
                            }}
                            onMouseUp={(e) => {
                                endClientXMovie = e.clientX;
                                handleMovieDetail(e, result);
                            }}
                        />
                    ))}
                </div>

                <Button className={cx('previous-list-btn', 'slider-btn')} onClick={handlePrevList}>
                    <span className={cx('move-list-icon')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                </Button>

                <Button className={cx('next-list-btn', 'slider-btn')} onClick={handleNextList}>
                    <span className={cx('move-list-icon')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </Button>
            </div>

            {isShowMovieDetail && (
                <Modal onClick={handleMovieDetail}>
                    <MovieDetail data={dataMovieDetail} />
                </Modal>
            )}
        </nav>
    );
}

MovieList.propTypes = {
    className: PropTypes.string,
    topic: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default MovieList;
