import { useState, useEffect } from "react";

function useCurrencyInfo(FFcurrency = 'US Dollar') {

    async function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    // console.log('Currect data is corresponding to ', FFcurrency)
    const [data, setData] = useState({})

    useEffect(() => { ///NOT WORKING PROPERLY!!!
        const fetchData = async () => {
            try {
                //FULL FORM OF CURRENCIES
                const FFresponse = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`);
                if (!FFresponse.ok) {
                    throw new Error('Failed to fetch data');
                }
                const FFvalue = await FFresponse.json();
                const FFdata = FFvalue;

                const currency = await getKeyByValue(FFdata, FFcurrency)




                if (currency) {
                    //EXCHANGE RATE OF CURRENCIES
                    const response1 = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                    const value1 = await response1.json();
                    const data1 = (value1[currency]);

                    // console.log(`EXCHANGE KEYS: ${Object.keys(data1).length}`)
                    // console.log(`EXCHANGE VALUES: ${Object.values(data1).length}`)
                    // console.log(`FFdata KEYS: ${Object.keys(FFdata).length}`)
                    // console.log(`FFdata VALUES: ${Object.values(FFdata).length}`)

                    // Filter FFdata to only keys present in data1
                    const filteredData2 = {};
                    Object.keys(data1).forEach(key => {
                        if (FFdata[key]) {
                            filteredData2[key] = FFdata[key];
                            // filteredData2[key] = value of FFdata;
                        }
                    });

                    // Create new object with keys replaced by values from FFdata
                    const replacedData = {};
                    Object.keys(filteredData2).forEach(key => {
                        replacedData[filteredData2[key]] = data1[key];
                        // replacedData[key] = value of data1;
                    });

                    // Sort replacedData by keys
                    const sortedData = {};
                    Object.keys(replacedData).sort().forEach(key => {
                        sortedData[key] = replacedData[key];
                    });

                    setData(sortedData);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        fetchData()
    }, [FFcurrency])
    // console.log(data)
    return data
}

export default useCurrencyInfo