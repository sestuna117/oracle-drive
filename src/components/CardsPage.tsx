import React, {useContext} from 'react';
import {CardContext} from "../hook";

export default function CardsPage() {
    const cardsData = useContext(CardContext);
    console.log(cardsData);

    if (cardsData) {
        console.log(cardsData.results);
    }

    return null;
}