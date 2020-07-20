import React, { useState, useEffect } from 'react';
import styles from './index.less';

export default () => {
  const [user, setUser] = useState<any>({name:''});
  const [isLogin, setIsLogin] = useState<any>('');
  const handleNoLogin = ()=>{
    localStorage.removeItem('isLogin')
    localStorage.removeItem('user')
  }
  useEffect(()=>{
    if(localStorage.getItem('isLogin')=='1'){
      setIsLogin(localStorage.getItem('isLogin'));
      setUser(JSON.parse(localStorage.getItem('user')as any));
    }
  },[])
  return (
    <div>
      <h1 className={styles.test}>Page user</h1>
      <div>当前登陆用户： {user.name}, 是否登陆 {isLogin==='1'?'是':'否'}</div>
      <button onClick={handleNoLogin}>退出登陆</button>
    </div>
  );
}
