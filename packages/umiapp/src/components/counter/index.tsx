import css from './index.less';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div className={css.test}>{count}</div>
            <button onClick={handleClick}>+</button>
        </div>
    );
};
export default Counter;
