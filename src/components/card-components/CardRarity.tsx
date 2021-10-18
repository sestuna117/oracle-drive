import React from 'react';
import {FaStar} from "react-icons/all";
import "./CardRarity.css"

export default function CardRarity(props: { rarity: number; }) {
    const {rarity} = props;

    return (
        <div className="card-rarity">
            <div className="card-rarity-row">
                {Array.from({length: rarity}, (x, i) => i).map((value) => (
                    <FaStar className="card-rarity-star" key={value}/>
                ))}
            </div>
        </div>
    );
}