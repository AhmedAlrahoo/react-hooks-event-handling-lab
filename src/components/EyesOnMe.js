import React from 'react';

const EyesOnMe = () => {
    const handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    const handleFocus = () => {
        console.log('Good!')
    }
    return (
        <>
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </>
    )
}
export default EyesOnMe;