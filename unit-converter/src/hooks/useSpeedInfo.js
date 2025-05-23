import { useEffect, useState } from 'react';

export default function useSpeedInfo(speed) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Meter per second (m/s)': {
      'Meter per second (m/s)': 1,
      'Kilometer per hour (km/h)': 3.6,
      'Mile per hour (mph)': 2.23694,
      'Foot per second (ft/s)': 3.28084,
      'Knot (kn)': 1.94384,
    },
    'Kilometer per hour (km/h)': {
      'Meter per second (m/s)': 0.277778,
      'Kilometer per hour (km/h)': 1,
      'Mile per hour (mph)': 0.621371,
      'Foot per second (ft/s)': 0.911344,
      'Knot (kn)': 0.539957,
    },
    'Mile per hour (mph)': {
      'Meter per second (m/s)': 0.44704,
      'Kilometer per hour (km/h)': 1.60934,
      'Mile per hour (mph)': 1,
      'Foot per second (ft/s)': 1.46667,
      'Knot (kn)': 0.868976,
    },
    'Foot per second (ft/s)': {
      'Meter per second (m/s)': 0.3048,
      'Kilometer per hour (km/h)': 1.09728,
      'Mile per hour (mph)': 0.681818,
      'Foot per second (ft/s)': 1,
      'Knot (kn)': 0.592484,
    },
    'Knot (kn)': {
      'Meter per second (m/s)': 0.514444,
      'Kilometer per hour (km/h)': 1.852,
      'Mile per hour (mph)': 1.15078,
      'Foot per second (ft/s)': 1.68781,
      'Knot (kn)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[speed]) {
      setData(conversionFactors[speed]);
    }
  }, [speed]);

  return data;
}
