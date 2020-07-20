import { Redirect } from 'umi';
import React from 'react';
import useAuth from '@/components/useAuth';
export default (props: any) => {
    const { isLogin } = useAuth();
    if (isLogin) {
        return <div>{props.children}</div>;
    } else {
        return <Redirect to='/login' />;
    }
};
