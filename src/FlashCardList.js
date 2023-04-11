import React from "react"
import { useState, useEffect, useRef } from "react"
import FlashCard from "./FlashCard"

export default function FlashCardList({ flash_card_list }) {
    return (
        flash_card_list.map((todo) => {
            return <FlashCard frontName={todo.front} backName={todo.back} />
        })
    )
}