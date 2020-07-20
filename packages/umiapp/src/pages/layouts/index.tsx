import React from 'react'
import { Link } from 'umi'

export default (props: any) => {
 return (
  <div style={{ padding: 20 }}>
   <div>
    <Link to='/adminList/list'>listPage</Link>
    {'   '}
    <Link to='/adminList/admin'>adminPage</Link>
    {'   '}
    {/* <Link to="/user">userPage</Link>{'   '}
        <Link to="/login">loginPage</Link> */}
   </div>
            common layout
   {props.children}
  </div>
 )
}
