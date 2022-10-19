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

  useEffect(() => {
    (async () => {
      console.log('passing');
      const result = await axios.get('http://192.168.100.89/inline', {
        headers: {
          'Access-Control-Allow-Headers': '*',
          'Content-Type': 'text/json',
        },
      });
      setData(result.data);
    })();
  }, []);

  return (
    <div className='App'>
      {/* <div className='container'>{data?.name}</div> */}
      <div className='container'>
        <SpeedChart />
      </div>
      <div className='container'>
        <SecondChart />
      </div>
      <div className='container'>
        <TirePressure />
      </div>
      <div className='container'>
        <Kilometter />
      </div>
    </div>
  );
}

export default App;
