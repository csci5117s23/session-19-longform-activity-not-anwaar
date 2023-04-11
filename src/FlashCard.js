import React from "react"
import { useState, useEffect, useRef } from "react"

export default function FlashCard( {frontName, backName} ) {
    const [front, setFront] = useState(true)
    const [label, setLabel] = useState(frontName)
    function handleClick() {
        setFront(!front)
        setLabel(front ? frontName : backName)
    }
    return (
        <>
            <div className="card">
                {label}
                <button onClick={handleClick}>Flip</button>
            </div>
        </>
    )
}