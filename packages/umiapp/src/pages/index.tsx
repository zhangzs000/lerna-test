import React from 'react'
import styles from './index.less'
import Counter from '@/components/counter'
import { Link } from 'umi'
export default () => {
 return (
  <div>
   <h1 className={styles.title}>Page index</h1>

   <div>
    <Link to='/user'>userPage</Link>
    {'    '}
    <Link to='/adminList'>adminListPage</Link>
    {'    '}
    <Link to='/login'>adminPage</Link>
   </div>
   <Counter />
  </div>
 )
}
