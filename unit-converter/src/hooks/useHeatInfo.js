import { useEffect, useState } from 'react';

export default function useHeatInfo(heat) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Calorie (cal)': {
      'Calorie (cal)': 1,
      'Kilocalorie (kcal)': 0.001,
      'Joule (J)': 4.184,
      'Kilojoule (kJ)': 0.004184,
      'Watt hour (Wh)': 0.00116222,
    },
    'Kilocalorie (kcal)': {
      'Calorie (cal)': 1000,
      'Kilocalorie (kcal)': 1,
      'Joule (J)': 4184,
      'Kilojoule (kJ)': 4.184,
      'Watt hour (Wh)': 1.16222,
    },
    'Joule (J)': {
      'Calorie (cal)': 0.239006,
      'Kilocalorie (kcal)': 0.000239006,
      'Joule (J)': 1,
      'Kilojoule (kJ)': 0.001,
      'Watt hour (Wh)': 0.000277778,
    },
    'Kilojoule (kJ)': {
      'Calorie (cal)': 239.006,
      'Kilocalorie (kcal)': 0.239006,
      'Joule (J)': 1000,
      'Kilojoule (kJ)': 1,
      'Watt hour (Wh)': 0.277778,
    },
    'Watt hour (Wh)': {
      'Calorie (cal)': 860.421,
      'Kilocalorie (kcal)': 0.860421,
      'Joule (J)': 3600,
      'Kilojoule (kJ)': 3.6,
      'Watt hour (Wh)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[heat]) {
      setData(conversionFactors[heat]);
    }
  }, [heat]);

  return data;
}
