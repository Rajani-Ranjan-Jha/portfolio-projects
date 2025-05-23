import { useEffect, useState } from 'react';

export default function useFrequencyInfo(frequency) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Hertz (Hz)': {
      'Hertz (Hz)': 1,
      'Kilohertz (kHz)': 0.001,
      'Megahertz (MHz)': 1e-6,
      'Gigahertz (GHz)': 1e-9,
      'Revolutions per minute (RPM)': 60,
    },
    'Kilohertz (kHz)': {
      'Hertz (Hz)': 1000,
      'Kilohertz (kHz)': 1,
      'Megahertz (MHz)': 0.001,
      'Gigahertz (GHz)': 1e-6,
      'Revolutions per minute (RPM)': 60000,
    },
    'Megahertz (MHz)': {
      'Hertz (Hz)': 1e+6,
      'Kilohertz (kHz)': 1000,
      'Megahertz (MHz)': 1,
      'Gigahertz (GHz)': 0.001,
      'Revolutions per minute (RPM)': 6e+7,
    },
    'Gigahertz (GHz)': {
      'Hertz (Hz)': 1e+9,
      'Kilohertz (kHz)': 1e+6,
      'Megahertz (MHz)': 1000,
      'Gigahertz (GHz)': 1,
      'Revolutions per minute (RPM)': 6e+10,
    },
    'Revolutions per minute (RPM)': {
      'Hertz (Hz)': 1/60,
      'Kilohertz (kHz)': 1/60000,
      'Megahertz (MHz)': 1/6e+7,
      'Gigahertz (GHz)': 1/6e+10,
      'Revolutions per minute (RPM)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[frequency]) {
      setData(conversionFactors[frequency]);
    }
  }, [frequency]);

  return data;
}
