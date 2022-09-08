import React, { useState, useEffect } from 'react';
const Function = () => {
    const [date, setDate] = useState(new Date())
    const tick = () => {
        setDate(new Date())
    }
    useEffect(() => {
        setInterval(() => {
            tick()
        }, 1000)
    }, [date])
    return(
        <>
            <h1>Realtime Function CLOCK</h1>
            <hr />
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}
export default Function