import React from "react"
import { useState, useEffect, useRef } from "react"
import FlashCard from "./FlashCard"
import FlashCardList from "./FlashCardList"

export default function FlashCardBuilder({ onAdd }) {
    const [frontLabel, setFrontLabel] = useState("")
    const [backLabel, setBackLabel] = useState("")
    return (
        <>
            <form>
                NEW FLASH CARD:
                <br />
                <label>
                    Front: <input 
                            type="text" 
                            value={frontLabel}
                            onChange={(e) => setFrontLabel(e.target.value)}
                            />
                </label>
                <br />
                <label>
                    Back: <input 
                           type="text" 
                           value={backLabel}
                           onChange={(e) => setBackLabel(e.target.value)}
                           />
                </label>
                <br />
                <button onClick={onAdd}>ADD</button>
            </form>
        </>
    )
}