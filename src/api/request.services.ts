import { axiosConfig } from "./index";

export async function loadCardsDesc() {
    try {
        let res = await axiosConfig.get('cards')
        console.log(res);
        return res.data;
        // do something with the response
    } catch (error) {
        // do something with the error
        console.error(error)
    }
}