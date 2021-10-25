import { axiosConfig } from "./index";

export async function getCards() {
    try {
        let res = await axiosConfig.get('cards')
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export async function getNPCs() {
    try {
        let res = await axiosConfig.get('npcs')
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export async function getPacks() {
    try {
        let res = await axiosConfig.get('packs')
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error)
    }
}