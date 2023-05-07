import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Search as SearchIcon } from '~/components/Icon';
import { useRef, useState } from 'react';

import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Search() {
    const [valueInput, setValueInput] = useState('');
    const inputSearch = useRef();

    console.log(valueInput);

    const handleClickSearchBtn = () => {
        const inputSearchElement = inputSearch.current;

        inputSearchElement.classList.toggle(cx('show'));

        if (inputSearchElement.classList.contains(cx('show'))) {
            inputSearchElement.focus();
        }
    };

    fetch('https://api.themoviedb.org/3/movie/550?api_key=a0428189f9595e2d84e4f041863dd2e0')
        .then((res) => res.json())
        .then((res) => console.log(res));

    return (
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
    );
}

export default Search;
