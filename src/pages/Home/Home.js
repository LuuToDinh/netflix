import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import styles from './Home.module.scss';
import videos from '~/assets/videos';
import { Muted, HighVolume, Info } from '~/components/Icon';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import MovieList from '~/components/MovieList/MovieList';

const cx = classNames.bind(styles);

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

    const videoPlay = useRef();
    const soundButton = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <video className={cx('intro-video')} ref={videoPlay} autoPlay muted loop>
                    <source src={videos.erika} type="video/mp4" />
                    Video Not Founded
                </video>

                <div className={cx('intro-content')}>
                    <div className={cx('intro-overview')}>
                        <h1 className={cx('intro-title')}>Narco</h1>
                        <p className={cx('intro-decs')}>
                            A gritty chronicle of the war against Colombia's infamously violent and powerful drug
                            cartels.
                        </p>
                    </div>
                    <div className={cx('intro-btns')}>
                        <Button className={cx('intro-play-btn')} leftIcon={<FontAwesomeIcon icon={faPlay} />}>
                            Play
                        </Button>
                        <Button className={cx('intro-info-btn')} leftIcon={<Info />}>
                            More info
                        </Button>
                    </div>
                </div>

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
