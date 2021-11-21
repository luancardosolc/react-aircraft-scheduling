import React, { useEffect, useState } from 'react';
import logo from './white-paper-airplane-icon.png';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AircraftSchedulingApi } from './API/AircraftSchedulingApi';
import Aircrafts from './Components/Aircrafts';

function App() {
  const [aircrafts, setAircrafts] = useState([]);
  useEffect(() => {
    testAPIs();
  }, []);

  const testAPIs = async () => {
    console.log('Testing API\'s');

    let aircraftsResponse = await AircraftSchedulingApi.getAircrafts(1, 10);
    setAircrafts(aircraftsResponse?.data);
    console.log('aircraftS:', aircraftsResponse?.data);

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
        <button onClick={testAPIs}>Test API's</button>
        <Aircrafts></Aircrafts>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
