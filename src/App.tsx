import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AircraftSchedulingApi } from './API/AircraftSchedulingApi';

function App() {
  const testAPIs = async () => {
    console.log('Testing API\'s');

    let aircrafts = await AircraftSchedulingApi.getAircrafts(1, 10);
    console.log('aircraftS:', aircrafts?.data);

    let aircraft = await AircraftSchedulingApi.getAircraftByIdent('GABCD');
    console.log('aircraft:', aircraft?.data);

    let flights = await AircraftSchedulingApi.getFlights(1, 10);
    console.log('flightS:', flights?.data);

    let flight = await AircraftSchedulingApi.getFlightById('AS1234');
    console.log('flight:', flight?.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={testAPIs}>Test API's</button>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
