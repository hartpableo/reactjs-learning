import { React, useState } from 'react'

export default function App() {
    const [ number, setNumber ] = useState(0)
    function decrementNumber() {
        setNumber( initialNumber => initialNumber - 1 )
    }
    function incrementNumber() {
        setNumber( initialNumber => initialNumber + 1 )
    }
    
    return (
        <div className="container text-center">
            <div className="counter">
                <div className="counter__value text-center fw-bold">{ number }</div>
                <div className="mt-3 gap-2 d-flex justify-content-center align-items-start">
                    <button type='button' onClick={ decrementNumber } className='fw-bold'>-</button>
                    <button type='button' onClick={ incrementNumber } className='fw-bold'>+</button>
                </div>
            </div>
        </div>
    )
}