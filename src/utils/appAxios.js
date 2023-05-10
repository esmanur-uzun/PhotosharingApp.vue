import axios from "axios";
export const appAxios = axios.create({
    baseURL: "https://esmanurbtmz.github.io/photo-sharing-app-db/db.json"
})