import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './MovieList.module.scss';
import { getMovieList } from '~/services';
import MovieItem from './MovieItem';

const cx = classNames.bind(styles);

function MovieList({ topic = 'Popular', path = '/movie/popular' }) {
    const [moiveList, setMovieList] = useState([]);

    const fetchApi = async (path) => {
        const response = await getMovieList(path);

        console.log(response);

        setMovieList(response.results);
    };

    useEffect(() => {
        fetchApi(path);
    }, [path]);

    return (
        <nav className="wrapper">
            <h2 className={cx('topic')}>{topic}</h2>
            {moiveList.map((result) => (
                <MovieItem key={result.id} data={result} />
            ))}
        </nav>
    );
}

MovieList.propTypes = {
    topic: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default MovieList;
