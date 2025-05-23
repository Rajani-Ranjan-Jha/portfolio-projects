import React, { useId } from 'react'

function InputBox({
    inputLabel = 'From',
    optionLabel = 'Parameter',
    inputType = 'number',
    amount =181810,
    onInputChange,
    onOptionChange,
    SelectOptions = [],
    defaultOption = "choose",
    amountDisable = false,
    currencyDisable = false,
    
}) {





    const amountInputId = useId()






    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex justify-between`}>
            <div className="w-2/5">
                <label 
                htmlFor={amountInputId} 
                className="text-black/40 mb-2 inline-block">

                    {inputLabel}
                    
                </label>
                <input
                    id={amountInputId}
                    className="outline-none border-1 w-1/1 border-gray-400 rounded-xl bg-transparent py-1.5 placeholder:text-gray-800 pl-1"
                    // type={inputType}
                    // type = ''
                    placeholder="Value"
                    disabled={amountDisable}
                    value={amount}
                    // value={amount !== null && amount !== undefined ? amount.toString() : ''}
                    // onClick={(e)=>{e.target.select()}}
                    onChange={(e) => onInputChange && onInputChange(e.target.value)}
                    // onChange={(e) => onInputChange && onInputChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">{optionLabel} Type</p>
                <select
                    className="rounded-lg px-1 w-1/1 py-1 bg-gray-200 cursor-pointer outline-none"
                    value={defaultOption}
                    onChange={(e) => onOptionChange && onOptionChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {SelectOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;