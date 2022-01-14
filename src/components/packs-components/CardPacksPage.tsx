import React from 'react';
import {useAppSelector} from "../../hook";
import {getAllPacks} from "../../store/slices/packsSlice";

export default function CardPacksPage() {
    const packsData = useAppSelector(getAllPacks)
    console.log(packsData);

    return null;
}