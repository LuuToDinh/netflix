import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import Button from '../Button/Button';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

import { getMovieTrailer } from '~/services';

const cx = classNames.bind(styles);

function MovieDetail({ data, callback }) {
    const [isShowTrailer, setIsShowTrailer] = useState(false);
    const videoId = useRef('');

    useEffect(() => {
        async function fetchApi() {
            videoId.current = await getMovieTrailer({ idVideo: data.id });
        }

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={cx('wrapper')}
            style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_URL + data.backdrop_path})` }}
            onClick={() => {
                setIsShowTrailer(false);
            }}
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
                    <Button
                        className={cx('icon', 'play-btn')}
                        leftIcon={<FontAwesomeIcon icon={faPlay} />}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowTrailer(true);
                        }}
                    >
                        Play
                    </Button>
                    <Button className={cx('icon', 'add-btn')} outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        My List
                    </Button>
                </div>
                {isShowTrailer && (
                    <div className={cx('trailer')}>
                        <div className={cx('trailer-content')}>
                            <iframe
                                className={cx('trailer-video')}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${videoId.current[0].key}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={cx('layer')}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MovieDetail;
