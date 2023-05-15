import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import styles from './Home.module.scss';
import videos from '~/assets/videos';
import { Muted, HighVolume, Info } from '~/components/Icon';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import MovieList from '~/components/MovieList/MovieList';
import MovieDetail from '~/components/MovieDetail/MovieDetail';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

const movieIntro = {
    adult: false,
    backdrop_path: '/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: 'en',
    original_title: 'John Wick: Chapter 4',
    overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
    popularity: 1522.841,
    poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    release_date: '2023-03-22',
    title: 'John Wick: Chapter 4',
    video: false,
    vote_average: 7.91,
    vote_count: 1392,
};

const topics = [
    {
        title: 'Now Playing',
        path: '/movie/now_playing',
    },
    {
        title: 'Popular',
        path: '/movie/popular',
    },
    {
        title: 'Upcoming',
        path: '/movie/upcoming',
    },
    {
        title: 'Top Rated',
        path: '/movie/top_rated',
    },
];

function Home() {
    const [isSoundOn, setIsSoundOn] = useState(false);
    const [isShowIntroDetail, setShowIntroDetail] = useState(false);

    const videoPlay = useRef();
    const soundButton = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <video className={cx('intro-video')} ref={videoPlay} autoPlay muted loop>
                    <source src={videos.johnWick4Traler} type="video/mp4" />
                    Video Not Founded
                </video>

                <div className={cx('intro-content')}>
                    <div className={cx('intro-overview')}>
                        <h1 className={cx('intro-title')}>{movieIntro.original_title}</h1>
                        <p className={cx('intro-decs')}>{movieIntro.overview}</p>
                    </div>
                    <div className={cx('intro-btns')}>
                        <Button
                            className={cx('intro-play-btn')}
                            leftIcon={<FontAwesomeIcon icon={faPlay} />}
                            onClick={() => {
                                alert('Coming soon.');
                            }}
                        >
                            Play
                        </Button>
                        <Button
                            className={cx('intro-info-btn')}
                            leftIcon={<Info />}
                            onClick={() => {
                                setShowIntroDetail(true);
                            }}
                        >
                            More Info
                        </Button>
                    </div>
                </div>
                {isShowIntroDetail && (
                    <Modal onClick={() => setShowIntroDetail(false)}>
                        <MovieDetail data={movieIntro} />
                    </Modal>
                )}

                <div
                    className={cx('sound-btn')}
                    ref={soundButton}
                    onClick={(e) => {
                        videoPlay.current.muted = !videoPlay.current.muted;
                        const soundElement = soundButton.current;

                        soundElement.classList.toggle(cx('active'));

                        if (soundElement.classList.contains(cx('active'))) {
                            setIsSoundOn(true);
                        } else {
                            setIsSoundOn(false);
                        }
                    }}
                >
                    {isSoundOn ? <HighVolume /> : <Muted />}
                </div>

                <div className={cx('fadeout-bottom')}></div>
            </div>

            {topics.map((topic, index) => (
                <MovieList key={index} topic={topic.title} path={topic.path} />
            ))}
        </div>
    );
}

export default Home;
