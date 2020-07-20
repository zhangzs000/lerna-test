// import { useState, useEffect } from 'react';

function useAuth() {

    let isLogin = localStorage.getItem('isLogin')

  return {
    isLogin: isLogin == '1'
  };
}
export default useAuth