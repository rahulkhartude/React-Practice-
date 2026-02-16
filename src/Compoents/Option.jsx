import React, { useState } from 'react'

const Option = () => {
    const options = ["India", "Pak", "NZ", "AUS"];
    const [selected, setSelected] = useState([]);
    const isAllSelected = selected.length === options.length;

    const handleSelectAll = (isSelectAll) => {
        if (isSelectAll) {
            setSelected(options);
        }
        else {
            setSelected([]);
       }
    }

    const handleOption = (country) => {
        if (selected.includes(country)) {
            setSelected(selected.filter(item => item !== country))
            if (selected.length === options.length) {
                isAllSelected = true;
            }
        }
        else {
            setSelected([...selected, country])
        }
    }


    return (
        <div>
            <div>

                <div>
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={() => handleSelectAll(!isAllSelected)}
                    />
                    <b>Select All</b>
                </div>

                {options.map((country, index) => {

                    return (<div>
                        <input key={index} type='checkBox'
                            checked={selected.includes(country)}
                            onChange={() => handleOption(country)
                            }
                            disabled={isAllSelected}
                        />
                        {country}

                    </div>
                    )

                })}

            </div>
        </div>
    )
}

export default Option
