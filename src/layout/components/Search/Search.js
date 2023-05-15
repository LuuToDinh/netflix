import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import { Search as SearchIcon } from '~/components/Icon';
import styles from './Search.module.scss';
import routes from '~/config/routes';
import Popper from '~/components/Popper';
import MovieItem from '~/components/MovieItem';
import { useDebounce } from '~/hooks';
import { search } from '~/services';

const cx = classNames.bind(styles);

function Search() {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const debounceSearch = useDebounce(valueInput, 500);

    const inputSearch = useRef();

    const handleClickSearchBtn = () => {
        const inputSearchElement = inputSearch.current;

        inputSearchElement.classList.toggle(cx('show'));

        if (inputSearchElement.classList.contains(cx('show'))) {
            inputSearchElement.focus();
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    };

    const handleClickOutside = () => {
        setIsFocused(false);
        inputSearch.current.classList.remove(cx('show'));
    };

    const handleIsClickOutside = (e) => {
        let clickedElement = e.target;
        let isClickOutside = true;

        if (clickedElement.classList.contains(cx('search'))) {
            isClickOutside = false;
        }

        while (clickedElement.parentElement) {
            clickedElement = clickedElement.parentElement;
            if (clickedElement.classList.contains(cx('search'))) {
                isClickOutside = false;
                break;
            }
        }

        if (isClickOutside) {
            handleClickOutside();
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleIsClickOutside);

        return () => {
            window.removeEventListener('click', handleIsClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (debounceSearch) {
            const fetchApi = async () => {
                const response = await search({ query: debounceSearch, include_adult: false });

                setSearchResult(response.results.slice(0, 5));
            };

            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debounceSearch]);

    return (
        <Tippy
            visible={isFocused && !!searchResult.length > 0}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Popper className={cx('search-popper')}>
                        {console.log(searchResult)}
                        {searchResult.map((data) => {
                            return <MovieItem className={cx('movie-search')} key={data.id} data={data} />;
                        })}

                        <Link to="#" className={cx('more-btn')}>
                            View more results
                        </Link>
                    </Popper>
                </div>
            )}
            onClickOutside={handleClickOutside}
        >
            <div className={cx('search')}>
                <button className={cx('search-btn', 'btn')} to={routes.Home} onClick={handleClickSearchBtn}>
                    <SearchIcon />
                </button>
                <input
                    className={cx('search-input')}
                    value={valueInput}
                    ref={inputSearch}
                    placeholder="Name, actor, brand"
                    onChange={(e) => setValueInput(e.target.value)}
                />
            </div>
        </Tippy>
    );
}

export default Search;
