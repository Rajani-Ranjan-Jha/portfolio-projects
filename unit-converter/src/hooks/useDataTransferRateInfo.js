import { useEffect, useState } from 'react';

export default function useDataTransferRateInfo(dataTransferRate) {
  const [data, setData] = useState({});

  const conversionFactors = {
    'Bit per second (bps)': {
      'Bit per second (bps)': 1,
      'Kilobit per second (kbps)': 0.001,
      'Megabit per second (Mbps)': 1e-6,
      'Gigabit per second (Gbps)': 1e-9,
      'Byte per second (Bps)': 0.125,
      'Kilobyte per second (kBps)': 0.000125,
      'Megabyte per second (MBps)': 1.25e-7,
      'Gigabyte per second (GBps)': 1.25e-10,
    },
    'Kilobit per second (kbps)': {
      'Bit per second (bps)': 1000,
      'Kilobit per second (kbps)': 1,
      'Megabit per second (Mbps)': 0.001,
      'Gigabit per second (Gbps)': 1e-6,
      'Byte per second (Bps)': 125,
      'Kilobyte per second (kBps)': 0.125,
      'Megabyte per second (MBps)': 0.000125,
      'Gigabyte per second (GBps)': 1.25e-7,
    },
    'Megabit per second (Mbps)': {
      'Bit per second (bps)': 1e+6,
      'Kilobit per second (kbps)': 1000,
      'Megabit per second (Mbps)': 1,
      'Gigabit per second (Gbps)': 0.001,
      'Byte per second (Bps)': 125000,
      'Kilobyte per second (kBps)': 125,
      'Megabyte per second (MBps)': 0.125,
      'Gigabyte per second (GBps)': 0.000125,
    },
    'Gigabit per second (Gbps)': {
      'Bit per second (bps)': 1e+9,
      'Kilobit per second (kbps)': 1e+6,
      'Megabit per second (Mbps)': 1000,
      'Gigabit per second (Gbps)': 1,
      'Byte per second (Bps)': 1.25e+8,
      'Kilobyte per second (kBps)': 1.25e+5,
      'Megabyte per second (MBps)': 125,
      'Gigabyte per second (GBps)': 125,
    },
    'Byte per second (Bps)': {
      'Bit per second (bps)': 8,
      'Kilobit per second (kbps)': 0.008,
      'Megabit per second (Mbps)': 8e-6,
      'Gigabit per second (Gbps)': 8e-9,
      'Byte per second (Bps)': 1,
      'Kilobyte per second (kBps)': 0.001,
      'Megabyte per second (MBps)': 1e-6,
      'Gigabyte per second (GBps)': 1e-9,
    },
    'Kilobyte per second (kBps)': {
      'Bit per second (bps)': 8000,
      'Kilobit per second (kbps)': 8,
      'Megabit per second (Mbps)': 0.008,
      'Gigabit per second (Gbps)': 8e-6,
      'Byte per second (Bps)': 1000,
      'Kilobyte per second (kBps)': 1,
      'Megabyte per second (MBps)': 0.001,
      'Gigabyte per second (GBps)': 0.000001,
    },
    'Megabyte per second (MBps)': {
      'Bit per second (bps)': 8e+6,
      'Kilobit per second (kbps)': 8000,
      'Megabit per second (Mbps)': 8,
      'Gigabit per second (Gbps)': 0.008,
      'Byte per second (Bps)': 1e+6,
      'Kilobyte per second (kBps)': 1000,
      'Megabyte per second (MBps)': 1,
      'Gigabyte per second (GBps)': 0.001,
    },
    'Gigabyte per second (GBps)': {
      'Bit per second (bps)': 8e+9,
      'Kilobit per second (kbps)': 8e+6,
      'Megabit per second (Mbps)': 8000,
      'Gigabit per second (Gbps)': 1,
      'Byte per second (Bps)': 1e+9,
      'Kilobyte per second (kBps)': 1e+6,
      'Megabyte per second (MBps)': 1000,
      'Gigabyte per second (GBps)': 1,
    },
  };

  useEffect(() => {
    if (conversionFactors[dataTransferRate]) {
      setData(conversionFactors[dataTransferRate]);
    }
  }, [dataTransferRate]);

  return data;
}
