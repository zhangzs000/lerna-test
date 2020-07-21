import React from 'react';
import { Link } from 'umi';

export default (props: any) => {
    return (
        <div style={{ padding: 20, border: '1px solid #f00' }}>
            <div>
                <Link to='/index'>/index</Link>
                {'   '}
                <Link to='/adminList'>/adminList</Link>
                {'   '}
                <Link to='/login'>/login</Link>
                {'   '}
                <Link to='/user'>/user</Link>
                {'   '}
            </div>
            全局 layout hello world
            {props.children}
        </div>
    );
};
