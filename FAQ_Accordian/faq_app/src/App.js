import React from 'react'
import './App.css'

import MainCard from './components/MainCard';
// import Faq from './components/Faq';
const App = () => {
    return (
        <div className='gradient__bg' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>

            <MainCard />
            {/* <Faq /> */}

        </div>

    )
}

export default App