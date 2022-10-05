import React from 'react'
import LeftSidebar from '../components/Layout/LeftSidebar'
import TopBar from '../components/Layout/TopBar'

function Layout({ children }) {
    return (
        <div className='Primary-Layout-wrapper'>
            <LeftSidebar />
            <main className='primary-main-layout'>
                <TopBar />
                {children}
            </main>
        </div>
    )
}

export default Layout