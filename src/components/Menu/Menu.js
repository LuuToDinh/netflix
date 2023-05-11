import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useRef, useState } from 'react';

import styles from './Menu.module.scss';
import Popper from '../Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ items, children, onClickItem = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const popperMenu = useRef();

    const onBack = () => {
        setHistory((pre) => pre.slice(0, history.length - 1));
    };

    const resetMenu = () => {
        setHistory((pre) => [pre[0]]);
    };

    const showMenuAnimation = () => {
        popperMenu.current.classList.remove(cx('fadeOut'));
    };

    return (
        <Tippy
            // visible
            interactive
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('wrapper')} ref={popperMenu} tabIndex="-1" {...attrs}>
                        <Popper className={cx('menu')}>
                            {history.length > 1 && <Header onBack={onBack}>{currentMenu.title}</Header>}

                            <div className={cx('items-container')}>
                                {currentMenu.data.map((item, index) => {
                                    const isParent = !!item.children;

                                    return (
                                        <MenuItem
                                            key={index}
                                            data={item}
                                            onClick={() => {
                                                if (isParent) {
                                                    setHistory((pre) => [...pre, item.children]);
                                                } else {
                                                    onClickItem(item);
                                                }
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </Popper>
                    </div>
                );
            }}
            trigger="click"
            onHide={resetMenu}
            onShow={showMenuAnimation}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    onClickItem: PropTypes.func,
};

export default Menu;
