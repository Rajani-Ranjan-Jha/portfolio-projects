import { useEffect, useState } from 'react';

export default function useEnergyInfo(energy) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Joule (J)': {
      'Joule (J)': 1,
      'Kilojoule (kJ)': 0.001,
      'Calorie (cal)': 0.239006,
      'Kilocalorie (kcal)': 0.000239006,
      'Watt hour (Wh)': 0.000277778,
      'Kilowatt hour (kWh)': 2.7778e-7,
      'Electronvolt (eV)': 6.242e+18,
    },
    'Kilojoule (kJ)': {
      'Joule (J)': 1000,
      'Kilojoule (kJ)': 1,
      'Calorie (cal)': 239.006,
      'Kilocalorie (kcal)': 0.239006,
      'Watt hour (Wh)': 0.277778,
      'Kilowatt hour (kWh)': 0.000277778,
      'Electronvolt (eV)': 6.242e+21,
    },
    'Calorie (cal)': {
      'Joule (J)': 4.184,
      'Kilojoule (kJ)': 0.004184,
      'Calorie (cal)': 1,
      'Kilocalorie (kcal)': 0.001,
      'Watt hour (Wh)': 0.00116222,
      'Kilowatt hour (kWh)': 1.16222e-6,
      'Electronvolt (eV)': 2.613e+19,
    },
    'Kilocalorie (kcal)': {
      'Joule (J)': 4184,
      'Kilojoule (kJ)': 4.184,
      'Calorie (cal)': 1000,
      'Kilocalorie (kcal)': 1,
      'Watt hour (Wh)': 1.16222,
      'Kilowatt hour (kWh)': 0.00116222,
      'Electronvolt (eV)': 2.613e+22,
    },
    'Watt hour (Wh)': {
      'Joule (J)': 3600,
      'Kilojoule (kJ)': 3.6,
      'Calorie (cal)': 860.421,
      'Kilocalorie (kcal)': 0.860421,
      'Watt hour (Wh)': 1,
      'Kilowatt hour (kWh)': 0.001,
      'Electronvolt (eV)': 8.748e+21,
    },
    'Kilowatt hour (kWh)': {
      'Joule (J)': 3.6e+6,
      'Kilojoule (kJ)': 3600,
      'Calorie (cal)': 860421,
      'Kilocalorie (kcal)': 860.421,
      'Watt hour (Wh)': 1000,
      'Kilowatt hour (kWh)': 1,
      'Electronvolt (eV)': 8.748e+24,
    },
    'Electronvolt (eV)': {
      'Joule (J)': 1.60218e-19,
      'Kilojoule (kJ)': 1.60218e-22,
      'Calorie (cal)': 3.826e-20,
      'Kilocalorie (kcal)': 3.826e-23,
      'Watt hour (Wh)': 1.143e-25,
      'Kilowatt hour (kWh)': 1.143e-28,
      'Electronvolt (eV)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[energy]) {
      setData(conversionFactors[energy]);
    }
  }, [energy]);

  return data;
}
