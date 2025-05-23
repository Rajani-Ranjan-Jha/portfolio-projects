import { useEffect, useState } from 'react';

export default function useTemperatureInfo(temperature) {
  const [data, setData] = useState({});

  const conversionFunctions = {
    'Celsius(°C)': {
      toCelsius: (val) => val,
      toFahrenheit: (val) => (val * 9) / 5 + 32,
      toKelvin: (val) => val + 273.15,
    },
    'Fahrenheit(°F)': {
      toCelsius: (val) => ((val - 32) * 5) / 9,
      toFahrenheit: (val) => val,
      toKelvin: (val) => ((val - 32) * 5) / 9 + 273.15,
    },
    'Kelvin(K)': {
      toCelsius: (val) => val - 273.15,
      toFahrenheit: (val) => ((val - 273.15) * 9) / 5 + 32,
      toKelvin: (val) => val,
    },
  };

  useEffect(() => {
    if (conversionFunctions[temperature]) {
      setData(conversionFunctions[temperature]);
    }
  }, [temperature]);

  return data;
}
