import { useEffect, useState } from 'react';

export default function useNumberSystemInfo(numberSystem) {
  const [data, setData] = useState({});

  const conversionFunctions = {
    'Binary(BIN)': {
      toBinary: (val) => val,
      toDecimal: (val) => parseInt(val, 2).toString(10),
      toHexadecimal: (val) => parseInt(val, 2).toString(16).toUpperCase(),
      toOctal: (val) => parseInt(val, 2).toString(8),
    },
    'Decimal(DEC)': {
      toBinary: (val) => parseInt(val, 10).toString(2),
      toDecimal: (val) => val,
      toHexadecimal: (val) => parseInt(val, 10).toString(16).toUpperCase(),
      toOctal: (val) => parseInt(val, 10).toString(8),
    },
    'Hexadecimal(HEX)': {
      toBinary: (val) => parseInt(val, 16).toString(2),
      toDecimal: (val) => parseInt(val, 16).toString(10),
      toHexadecimal: (val) => val.toUpperCase(),
      toOctal: (val) => parseInt(val, 16).toString(8),
    },
    'Octal(OCT)': {
      toBinary: (val) => parseInt(val, 8).toString(2),
      toDecimal: (val) => parseInt(val, 8).toString(10),
      toHexadecimal: (val) => parseInt(val, 8).toString(16).toUpperCase(),
      toOctal: (val) => val,
    },
  };

  useEffect(() => {
    if (conversionFunctions[numberSystem]) {
      setData(conversionFunctions[numberSystem]);
    }
  }, [numberSystem]);

  return data;
}
