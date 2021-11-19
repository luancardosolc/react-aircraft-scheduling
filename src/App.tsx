import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AircraftSchedulingApi } from './API/AircraftSchedulingApi';

function App() {
  const testAPIs = async () => {
    console.log('Testing API\'s');
    let aircrafts = await AircraftSchedulingApi.getAircrafts();
    console.log('aircrafts', aircrafts);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={testAPIs}>Test API's</button>
      </header>
    </div>
  );
}

export default App;
