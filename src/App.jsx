import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SpeedChart from './components/SpeedChart';
import SecondChart from './components/BarChart';
import TirePressure from './components/TirePressure';
import Kilometter from './components/Kilemeter';

function App() {
  const [data, setData] = useState();

  //   fuel_pressure
  // fuel_tank_level
  // intake_air_temp
  // rpm
  // run_time
  // speed
  // throttle_position

  useEffect(() => {
    let interval;
    (async () => {
      let tick = 0;
      interval = setInterval(async () => {
        tick++;
        console.log('passing', tick);
        const result = await axios.get('http://192.168.100.37:80/getData', {
          headers: {
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'text/json',
          },
        });
        setData(result.data);
      }, 2000);
    })();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      {/* <div className='container'>{data?.name}</div> */}
      <div className='container'>
        <SpeedChart data={data} label='Velocidad - Km/h' />
      </div>
      <div className='container'>
        <SecondChart data={data} />
      </div>
      <div className='container'>
        <SpeedChart data={data} label='RPM' />
      </div>
      <div className='container'>
        <Kilometter data={data} />
      </div>
    </div>
  );
}

export default App;
