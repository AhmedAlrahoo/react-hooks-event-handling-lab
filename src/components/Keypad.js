import React from 'react';
const Keypad = () => {
    const handleChange = () => {
        console.log("Entering password...")
    }
    return (
        <>
        <input type="password" onChange={handleChange}></input>
        
        </>
    )
}
export default Keypad;