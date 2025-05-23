
import React, { useState} from 'react';
import './App.css';
import Converter from './components/Converter';

function App() {
  const [component, setComponent] = useState(false);
  const [unit, setUnit] = useState('');

  // Function to toggle component visibility
  const loadComponent = () => {
    setComponent(true);
  }

  // Function to close component - passed as a prop to child
  const closeComponent = () => {
    setComponent(false);
  }

  const converters = [
    { name: 'Currency', type: 'currency' },
    { name: 'Length', type: 'length' },
    { name: 'Area', type: 'area' },
    { name: 'Volume', type: 'volume' },
    { name: 'Weight', type: 'weight' },
    { name: 'Temperature', type: 'temperature' },
    { name: 'Speed', type: 'speed' },
    { name: 'Pressure', type: 'pressure' },
    { name: 'Power', type: 'power' },
    { name: 'Energy', type: 'energy' },
    { name: 'Number System', type: 'number-system' },
    // { name: 'Roman', type: 'roman' },
    { name: 'Time', type: 'time' },
    { name: 'Data Transfer Rate', type: 'data-transfer-rate' },

    { name: 'Heat', type: 'heat' }, 
    { name: 'Frequency', type: 'frequency' },
    { name: 'Plane Angle', type: 'plane-angle' },
    { name: 'Memory Size', type: 'memory-size' }
  ];



  return (
    <div className="flex flex-col justify-center items-center content-center p-8">
      <h2 className="text-5xl font-semibold  text-white pb-5">Unit Converter</h2>

      <div className="container">
        {converters.map((converter) => (
          <div
            key={converter.name}
            className="item"
            onClick={() => {
              loadComponent();
              setUnit(converter.name);
            }}
          >
            {converter.name}
          </div>
        ))}
      </div>

      {component && <Converter onClose={closeComponent} unitName={unit}/>}
    </div>
  );
}

export default App;
