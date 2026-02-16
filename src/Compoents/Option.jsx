import React, { useState } from 'react'

const Option = () => {
    const options = ["India", "Pak", "NZ", "AUS"];
    const [selected, setSelected] = useState([]);
    const [selectAll,setselectAll] = useState(false);
    const [diselectAll,setdiselectAll] = useState(false);
    const handleSelectAll =()=>{
    setSelected(options);
    }

   const handleDeSelectAll=()=>{
    setSelected([]);
   }

    return (
        <div>
            <div>
                {options.map((country, index) => {

                    return ( <div>
                        <input key={index} type='checkBox'
                            checked={selected.includes(country)} 
                            onChange={(e)=>{
                                setSelected (selected.includes(country)
                                ? selected.filter(item => item !== country)
                                : [...selected, country])
                            }}
                            />
                            { country }

                    </div>
                    )

                })}
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleDeSelectAll}>DeSelect All</button>

            </div>
        </div>
    )
}

export default Option
