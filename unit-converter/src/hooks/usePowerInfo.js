import { useEffect, useState } from 'react';

export default function usePowerInfo(power) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Watt (W)': {
      'Watt (W)': 1,
      'Kilowatt (kW)': 0.001,
      'Horsepower (hp)': 0.00134102,
      'BTU per hour (BTU/h)': 3.41214,
      'Calorie per second (cal/s)': 0.238846,
    },
    'Kilowatt (kW)': {
      'Watt (W)': 1000,
      'Kilowatt (kW)': 1,
      'Horsepower (hp)': 1.34102,
      'BTU per hour (BTU/h)': 3412.14,
      'Calorie per second (cal/s)': 238.846,
    },
    'Horsepower (hp)': {
      'Watt (W)': 745.7,
      'Kilowatt (kW)': 0.7457,
      'Horsepower (hp)': 1,
      'BTU per hour (BTU/h)': 2544.43,
      'Calorie per second (cal/s)': 177.517,
    },
    'BTU per hour (BTU/h)': {
      'Watt (W)': 0.293071,
      'Kilowatt (kW)': 0.000293071,
      'Horsepower (hp)': 0.000393014,
      'BTU per hour (BTU/h)': 1,
      'Calorie per second (cal/s)': 0.069805,
    },
    'Calorie per second (cal/s)': {
      'Watt (W)': 4.184,
      'Kilowatt (kW)': 0.004184,
      'Horsepower (hp)': 0.005639,
      'BTU per hour (BTU/h)': 14.307,
      'Calorie per second (cal/s)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[power]) {
      setData(conversionFactors[power]);
    }
  }, [power]);

  return data;
}
