import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

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
      <div className='container'>{data?.name}</div>
      <div className='container'></div>
      <div className='container'></div>
      <div className='container'></div>
    </div>
  );
}

export default App;
