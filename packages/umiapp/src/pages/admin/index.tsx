import React from 'react';
import styles from './index.less';
import Counter from '@/components/counter'
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page admin</h1>
      <Counter/>
    </div>
  );
}
