import React from 'react'

import Card from './components/Card'
import StyledCard from './components/StyledCard'
function App() {
  return (
    <div className = "Main"
    style ={{
      backgroundColor: 'hsl(217, 54%, 11%)',
      width:'100vw',
      height: '100vh',
      display: 'flex',
      alignItems:"center",
      justifyContent:"center",
      
    }}>
    <Card />
    {/* <StyledCard /> */}
    </div>
  );
}

export default App;
