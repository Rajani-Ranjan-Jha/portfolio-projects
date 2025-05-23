import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import {
    useCurrencyInfo,
    useLengthInfo,
    useAreaInfo,
    useVolumeInfo,
    useWeightInfo,
    useTemperatureInfo,
    useSpeedInfo,
    usePressureInfo,
    usePowerInfo,
    useEnergyInfo,
    useTimeInfo,
    useHeatInfo,
    useFrequencyInfo,
    usePlaneAngleInfo,
    useDataTransferRateInfo,
    useNumberSystemInfo,
    useMemorySizeInfo
}

    from '../hooks';

import '../App.css';




function Converter({ onClose, unitName }) {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [convertedOutput, setConvertedOutput] = useState(0);
    const [options, setOptions] = useState(['select']);



    //HOOKS
    const currencyData = useCurrencyInfo(from);
    const lengthData = useLengthInfo(from);
    const areaData = useAreaInfo(from);
    const volumeData = useVolumeInfo(from);
    const weightData = useWeightInfo(from);
    const temperatureData = useTemperatureInfo(from);
    const speedData = useSpeedInfo(from);
    const pressureData = usePressureInfo(from);
    const powerData = usePowerInfo(from);
    const energyData = useEnergyInfo(from);
    const timeData = useTimeInfo(from);
    const heatData = useHeatInfo(from);
    const frequencyData = useFrequencyInfo(from);
    const planeAngleData = usePlaneAngleInfo(from);
    const dataTransferRateData = useDataTransferRateInfo(from);
    const numberSystemData = useNumberSystemInfo(from);
    const memorySizeData = useMemorySizeInfo(from)

    //UseEffect for providing the options corresponding to the converter
    useEffect(() => {
        let defaultFrom;
        let defaultTo;

        if (unitName === 'Currency') {
            defaultFrom = 'US Dollar';
            defaultTo = 'Indian Rupee';
        } else if (unitName === 'Length') {
            defaultFrom = 'Kilometer(km)';
            defaultTo = 'Meter(m)';
        } else if (unitName === 'Area') {
            defaultFrom = 'Square Kilometer(km²)';
            defaultTo = 'Hectare(ha)';
        } else if (unitName === 'Volume') {
            defaultFrom = 'Cubic Meter(m³)';
            defaultTo = 'Liter(L)';
        } else if (unitName === 'Weight') {
            defaultFrom = 'Kilogram(kg)';
            defaultTo = 'Gram(g)';
        } else if (unitName === 'Temperature') {
            defaultFrom = 'Celsius(°C)';
            defaultTo = 'Kelvin(K)';
        } else if (unitName === 'Speed') {
            defaultFrom = 'Meter per second (m/s)';
            defaultTo = 'Kilometer per hour (km/h)';
        } else if (unitName === 'Pressure') {
            defaultFrom = 'Pascal (Pa)';
            defaultTo = 'Kilopascal (kPa)';
        } else if (unitName === 'Power') {
            defaultFrom = 'Watt (W)';
            defaultTo = 'Kilowatt (kW)';
        } else if (unitName === 'Energy') {
            defaultFrom = 'Joule (J)';
            defaultTo = 'Kilojoule (kJ)';
        } else if (unitName === 'Time') {
            defaultFrom = 'Second (s)';
            defaultTo = 'Minute (min)';
        } else if (unitName === 'Heat') {
            defaultFrom = 'Calorie (cal)';
            defaultTo = 'Kilocalorie (kcal)';
        } else if (unitName === 'Frequency') {
            defaultFrom = 'Hertz (Hz)';
            defaultTo = 'Kilohertz (kHz)';
        } else if (unitName === 'Plane Angle') {
            defaultFrom = 'Degree (°)';
            defaultTo = 'Radian (rad)';
        } else if (unitName === 'Data Transfer Rate') {
            defaultFrom = 'Bit per second (bps)';
            defaultTo = 'Kilobit per second (kbps)';
        } else if (unitName === 'Number System') {
            defaultFrom = 'Decimal(DEC)';
            defaultTo = 'Binary(BIN)';
        } else if (unitName === 'Memory Size') {
            defaultFrom = 'Gigabyte (GB)';
            defaultTo = 'Megabyte (MB)';
        }
        setFrom(defaultFrom);
        setTo(defaultTo);
    }, [unitName]);


    //UseEffect for fetching the Exchange rate data
    useEffect(() => {
        let rateData = {};
        if (unitName === 'Currency') {
            rateData = currencyData;
        } else if (unitName === 'Length') {
            rateData = lengthData;
        } else if (unitName === 'Area') {
            rateData = areaData;
        } else if (unitName === 'Volume') {
            rateData = volumeData;
        } else if (unitName === 'Weight') {
            rateData = weightData;
        } else if (unitName === 'Temperature') {
            // rateData = temperatureData;
            setOptions(['Celsius(°C)', 'Fahrenheit(°F)', 'Kelvin(K)']);

        } else if (unitName === 'Number System') {

            // rateData = numberSystemData;
            setOptions(['Binary(BIN)', 'Decimal(DEC)', 'Hexadecimal(HEX)', 'Octal(OCT)']);

        } else if (unitName === 'Speed') {
            rateData = speedData;
        } else if (unitName === 'Pressure') {
            rateData = pressureData;
        } else if (unitName === 'Power') {
            rateData = powerData;
        } else if (unitName === 'Energy') {
            rateData = energyData;
        } else if (unitName === 'Time') {
            rateData = timeData;
        } else if (unitName === 'Heat') {
            rateData = heatData;
        } else if (unitName === 'Frequency') {
            rateData = frequencyData;
        } else if (unitName === 'Plane Angle') {
            rateData = planeAngleData;
        } else if (unitName === 'Data Transfer Rate') {
            rateData = dataTransferRateData;
        } else if (unitName === 'Memory Size') {
            rateData = memorySizeData;
        }
        if (rateData && Object.keys(rateData).length > 0 && unitName !== 'Temperature' && unitName !== 'Number System') {
            setOptions(Object.keys(rateData));
        }
    }, [unitName, currencyData, lengthData, from, speedData, pressureData, powerData, energyData, timeData, heatData, frequencyData, planeAngleData, dataTransferRateData]);



    const swap = () => {
        setFrom(to);
        setTo(from);
    };

    const convert = () => {

        let currentData = {};
        if (unitName === 'Currency') {
            currentData = currencyData;
        } else if (unitName === 'Length') {
            currentData = lengthData;
        } else if (unitName === 'Area') {
            currentData = areaData;
        } else if (unitName === 'Volume') {
            currentData = volumeData;
        } else if (unitName === 'Weight') {
            currentData = weightData;
        } else if (unitName === 'Temperature') {

            currentData = temperatureData;
            let output = 0;
            const inputAmount = parseFloat(amount);
            if (to === 'Celsius(°C)') {
                output = currentData.toCelsius(inputAmount);

            } else if (to === 'Fahrenheit(°F)') {
                output = currentData.toFahrenheit(inputAmount);

            } else if (to === 'Kelvin(K)') {
                output = currentData.toKelvin(inputAmount);

            }
            setConvertedOutput(output.toFixed(2));
        } else if (unitName === 'Number System') {
            currentData = numberSystemData;
            let output = 0;

            if (to === 'Binary(BIN)') {
                console.log(`toBinary is WORKING!!`)
                output = currentData.toBinary(amount);

            } else if (to === 'Decimal(DEC)') {
                console.log(`toDecimal is WORKING!!`)
                output = currentData.toDecimal(amount);

            } else if (to === 'Hexadecimal(HEX)') {
                console.log(`toHexadecimal is WORKING!!`)
                output = String(currentData.toHexadecimal(amount));

            } else if (to === 'Octal(OCT)') {
                console.log(`toOctal is WORKING!!`)
                output = currentData.toOctal(amount);

            }
            setConvertedOutput(output);
        } else if (unitName === 'Speed') {
            currentData = speedData;
        } else if (unitName === 'Pressure') {
            currentData = pressureData;
        } else if (unitName === 'Power') {
            currentData = powerData;
        } else if (unitName === 'Energy') {
            currentData = energyData;
        } else if (unitName === 'Time') {
            currentData = timeData;
        } else if (unitName === 'Heat') {
            currentData = heatData;
        } else if (unitName === 'Frequency') {
            currentData = frequencyData;
        } else if (unitName === 'Plane Angle') {
            currentData = planeAngleData;
        } else if (unitName === 'Data Transfer Rate') {
            currentData = dataTransferRateData;
        } else if (unitName === 'Memory Size') {
            currentData = memorySizeData;
        }
        if (currentData && currentData[to] && unitName !== 'Temperature' && unitName !== 'Number System') {
            const output = amount * currentData[to]
            setConvertedOutput(output.toFixed(2));
        } else if (unitName !== 'Temperature' && unitName !== 'Number System') {
            console.error('Cannot convert: missing conversion rate data');
        }
    };

    //Shortcut for convert button
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                const convertButton = document.getElementById('convert');
                if (convertButton) {
                    convertButton.click();
                }
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    //Close the converter
    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <div className="overlay" onClick={handleClose}></div>
            <div id="my-component-container" className="main h-3/5 flex flex-col bg-violet-500">
                <div className="h-full flex flex-col justify-center align-center">
                    <h1 className="text-4xl font-semibold mb-8 text-white drop-shadow-2xl shadow-white text-center">
                        {unitName ? (unitName.charAt(0).toUpperCase() + unitName.slice(1)) : ''} Converter
                    </h1>
                    <div className="mt-4">
                        <InputBox
                            inputLabel="From"
                            optionLabel={unitName}
                            // inputType={inputType}
                            amount={amount}
                            SelectOptions={options}
                            onOptionChange={(value) => setFrom(String(value))}
                            defaultOption={from}
                            onInputChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="my-2 w-full flex justify-center">
                        <button
                            className="w-1/3 bg-green-600 mx-auto text-white px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div >
                        <InputBox
                            inputLabel="To"
                            optionLabel={unitName}
                            amount={convertedOutput}
                            SelectOptions={options}
                            onOptionChange={(value) => setTo(value)}
                            defaultOption={to}
                            amountDisable
                        />
                    </div>
                    <div className="mt-2 mb-2">
                        <p className="text-center text-red-800">{convertedOutput === 'NaN' || convertedOutput === 'NAN' ? 'Error: Invalid input!' : ''}</p>

                    </div>
                    <div className="mb-4">
                        <button
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                            onClick={convert}
                            id="convert"
                        >
                            Convert
                        </button>
                    </div>
                </div>
                <div className="self-end">
                    <button
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}

export default Converter;
