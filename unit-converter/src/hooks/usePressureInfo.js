import { useEffect, useState } from 'react';

export default function usePressureInfo(pressure) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Pascal (Pa)': {
      'Pascal (Pa)': 1,
      'Kilopascal (kPa)': 0.001,
      'Bar (bar)': 0.00001,
      'Pound per square inch (psi)': 0.000145038,
      'Atmosphere (atm)': 9.86923e-6,
      'Torr (mmHg)': 0.00750062,
    },
    'Kilopascal (kPa)': {
      'Pascal (Pa)': 1000,
      'Kilopascal (kPa)': 1,
      'Bar (bar)': 0.01,
      'Pound per square inch (psi)': 0.145038,
      'Atmosphere (atm)': 0.00986923,
      'Torr (mmHg)': 7.50062,
    },
    'Bar (bar)': {
      'Pascal (Pa)': 100000,
      'Kilopascal (kPa)': 100,
      'Bar (bar)': 1,
      'Pound per square inch (psi)': 14.5038,
      'Atmosphere (atm)': 0.986923,
      'Torr (mmHg)': 750.062,
    },
    'Pound per square inch (psi)': {
      'Pascal (Pa)': 6894.76,
      'Kilopascal (kPa)': 6.89476,
      'Bar (bar)': 0.0689476,
      'Pound per square inch (psi)': 1,
      'Atmosphere (atm)': 0.0680459,
      'Torr (mmHg)': 51.7149,
    },
    'Atmosphere (atm)': {
      'Pascal (Pa)': 101325,
      'Kilopascal (kPa)': 101.325,
      'Bar (bar)': 1.01325,
      'Pound per square inch (psi)': 14.6959,
      'Atmosphere (atm)': 1,
      'Torr (mmHg)': 760,
    },
    'Torr (mmHg)': {
      'Pascal (Pa)': 133.322,
      'Kilopascal (kPa)': 0.133322,
      'Bar (bar)': 0.00133322,
      'Pound per square inch (psi)': 0.0193368,
      'Atmosphere (atm)': 0.00131579,
      'Torr (mmHg)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[pressure]) {
      setData(conversionFactors[pressure]);
    }
  }, [pressure]);

  return data;
}
