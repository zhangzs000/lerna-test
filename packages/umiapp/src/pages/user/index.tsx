import React, { useState, useEffect } from 'react'
import styles from './index.less'
// import copy from 'zzs_deepcopy';
export default () => {
 const [user, setUser] = useState<any>({ name: '' })
 const [isLogin, setIsLogin] = useState<any>('')
 const handleNoLogin = () => {
  localStorage.removeItem('isLogin')
  localStorage.removeItem('user')
 }
 useEffect(() => {
  if (localStorage.getItem('isLogin') === '1') {
   setIsLogin(localStorage.getItem('isLogin'))
   setUser(JSON.parse(localStorage.getItem('user') as any))
  }
 }, [])
 const handleChangeName = () => {
  // let _user = copy(user);
  // console.log('deepcopy user: ',_user)
  // _user.name = 'test';
  // console.log('before user: ',user)
  // console.log('deepcopy user: ',_user)
 }
 return (
  <div>
   <h1 className={styles.test}>Page user</h1>
   <div>
                当前登陆用户： {user.name}, 是否登陆 {isLogin === '1' ? '是' : '否'}
   </div>

   <button onClick={handleNoLogin}>退出登陆</button>
   <button onClick={handleChangeName}>修改名字</button>
  </div>
 )
}
