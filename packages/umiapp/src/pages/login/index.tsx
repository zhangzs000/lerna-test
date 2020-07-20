import React, { useState } from 'react'
import styles from './index.less'

export default () => {
  const [name, setName] = useState('')

  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log(name, password)
    localStorage.setItem('isLogin', '1')
    localStorage.setItem('user', JSON.stringify({ name, password }))
  }
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <h1 className={styles.test}>Page login</h1>
      <input type='text' value={name} onChange={handleName} />
      <input type='text' value={password} onChange={handlePassword} />
      <button onClick={handleLogin}>登陆</button>
    </div>
  )
}
