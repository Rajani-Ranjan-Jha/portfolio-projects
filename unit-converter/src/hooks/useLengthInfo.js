import { useEffect, useState } from 'react';

export default function useLengthInfo(length) {
  const [data, setData] = useState({})


  const conversionFactors = {
  'Kilometer(km)': 
  { 'Kilometer(km)': 1,'Meter(m)': 1000, 'Centimeter(cm)': 100000, 'Millimeter(mm)': 1000000, 'Mile(mi)': 0.621371, 'Yard(yd)': 1093.61, 'Foot(ft)': 3280.84, 'Inch(in)': 39370.1 },

  'Meter(m)': 
  { 'Kilometer(km)': 0.001,'Meter(m)': 1, 'Centimeter(cm)': 100, 'Millimeter(mm)': 1000, 'Mile(mi)': 0.000621371, 'Yard(yd)': 1.09361, 'Foot(ft)': 3.28084, 'Inch(in)': 39.3701 },

  'Centimeter(cm)': 
  { 'Kilometer(km)': 0.00001,'Centimeter(cm)':1, 'Meter(m)': 0.01, 'Millimeter(mm)': 10, 'Mile(mi)': 0.00000621371, 'Yard(yd)': 0.0109361, 'Foot(ft)': 0.0328084, 'Inch(in)': 0.393701 },

  'Millimeter(mm)': 
  { 'Kilometer(km)': 0.000001,'Centimeter(cm)':1, 'Meter(m)': 0.001, 'Centimeter(cm)': 0.1, 'Mile(mi)': 0.000000621371, 'Yard(yd)': 0.00109361, 'Foot(ft)': 0.00328084, 'Inch(in)': 0.0393701 },

  'Mile(mi)': 
  { 'Kilometer(km)': 1.60934,'Mile(mi)':1, 'Meter(m)': 1609.34, 'Centimeter(cm)': 160934, 'Millimeter(mm)': 1609340, 'Yard(yd)': 1760, 'Foot(ft)': 5280, 'Inch(in)': 63360 },

  'Yard(yd)': 
  { 'Kilometer(km)': 0.0009144,'Yard(yd)':1, 'Meter(m)': 0.9144, 'Centimeter(cm)': 91.44, 'Millimeter(mm)': 914.4, 'Mile(mi)': 0.000568182, 'Foot(ft)': 3, 'Inch(in)': 36 },

  'Foot(ft)': 
  { 'Kilometer(km)': 0.0003048,'Foot(ft)':1, 'Meter(m)': 0.3048, 'Centimeter(cm)': 30.48, 'Millimeter(mm)': 304.8, 'Mile(mi)': 0.000189394, 'Yard(yd)': 0.333333, 'Inch(in)': 12 },

  'Inch(in)': 
  { 'Kilometer(km)': 0.0000254,'Inch(in)':1, 'Meter(m)': 0.0254, 'Centimeter(cm)': 2.54, 'Millimeter(mm)': 25.4, 'Mile(mi)': 0.000015783, 'Yard(yd)': 0.0277778, 'Foot(ft)': 0.0833333 },

};


  useEffect(() => {
    if (conversionFactors[length]) {
      setData(conversionFactors[length]);
    }
  }, [length]);

  return data;
}
