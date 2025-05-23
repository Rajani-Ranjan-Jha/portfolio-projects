import { useEffect, useState } from 'react';

export default function usePlaneAngleInfo(planeAngle) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Degree (°)': {
      'Degree (°)': 1,
      'Radian (rad)': 0.0174533,
      'Gradian (gon)': 1.11111,
      'Minute of arc (′)': 60,
      'Second of arc (″)': 3600,
    },
    'Radian (rad)': {
      'Degree (°)': 57.2958,
      'Radian (rad)': 1,
      'Gradian (gon)': 63.66198,
      'Minute of arc (′)': 3437.75,
      'Second of arc (″)': 206264.8,
    },
    'Gradian (gon)': {
      'Degree (°)': 0.9,
      'Radian (rad)': 0.0157079,
      'Gradian (gon)': 1,
      'Minute of arc (′)': 54,
      'Second of arc (″)': 3240,
    },
    'Minute of arc (′)': {
      'Degree (°)': 0.0166667,
      'Radian (rad)': 0.000290888,
      'Gradian (gon)': 0.0185185,
      'Minute of arc (′)': 1,
      'Second of arc (″)': 60,
    },
    'Second of arc (″)': {
      'Degree (°)': 0.000277778,
      'Radian (rad)': 4.84814e-6,
      'Gradian (gon)': 0.000308642,
      'Minute of arc (′)': 0.0166667,
      'Second of arc (″)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[planeAngle]) {
      setData(conversionFactors[planeAngle]);
    }
  }, [planeAngle]);

  return data;
}
