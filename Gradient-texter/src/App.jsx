import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cor1, setCor1] = useState("#ffffff"); 
  const [cor2, setCor2] = useState("#ffffff"); 


  const gradiente = `linear-gradient(to bottom right, ${cor1}, ${cor2})`;

  return (
    <>
      <div className="container">
        <input 
          className="gradient1" 
          id="cor1" 
          type="color" 
          value={cor1}
          onChange={(e) => setCor1(e.target.value)} 
        />

        <span className="desgra1" style={{color: {cor1}}}>{cor1}</span>

        <div className="color" style={{ background: gradiente }}></div>

        <input 
          className="gradient2" 
          id="cor2" 
          type="color" 
          value={cor2}
          onChange={(e) => setCor2(e.target.value)}
        />

        <span className="desgra2">{cor2}</span>
      </div>
    </>
  );
}

export default App;
