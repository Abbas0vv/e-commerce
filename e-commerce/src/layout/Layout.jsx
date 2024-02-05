import React from 'react'
import TopHeader from '../components/Header/TopHeader'

const Layout = (props) => {
  return (
    <div>
        <TopHeader/>
        <main>
            {props.childeren}
        </main>
    </div>
  )
}

export default Layout