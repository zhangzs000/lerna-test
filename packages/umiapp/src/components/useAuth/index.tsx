// import { useState, useEffect } from 'react';

function useAuth() {
    const isLogin = localStorage.getItem('isLogin');

    return {
        isLogin: isLogin === '1'
    };
}
export default useAuth;
