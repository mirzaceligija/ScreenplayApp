import React, { useState } from 'react';

const ToggleGroup = ({array, toggleCategory}) => {

    const [selectedBtn, setSelectedBtn] = useState('')

    const toggleSelect = (id) => {
        toggleCategory(id);
        array.forEach(element => {
            if(element._id === id) {
                setSelectedBtn(id);
            }
        });
    }

    const renderedButtons = array.map((item) => {
        return <button key={item._id} className={selectedBtn === item._id ? "Accent Button" : "Button"} onClick={(event) => toggleSelect(item._id)}>{item.name}</button>
    })

    return (
        <div className="ToggleGroup">
            {renderedButtons}
        </div>
    )
}

export default ToggleGroup;