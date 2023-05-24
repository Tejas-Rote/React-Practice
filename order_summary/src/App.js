import React from 'react'
import './App.css';
import Order from './components/Order'
function App() {
  return (

    <div
        style={{
            width: '100vw',
            height: '100vh',
            display:'flex', 
            alignItems:"center",
            justifyContent:"center",
            backgroundImage:"url('/images/pattern-background-desktop.svg')",
            backgroundRepeat: 'no-repeat',
        }}>

        <Order />

        </div>



  );
}

export default App;
