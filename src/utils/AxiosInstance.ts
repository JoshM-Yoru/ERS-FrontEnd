import axios from "axios";

export const axInst = axios.create({
    baseURL: "http://localhost:5437",
});
