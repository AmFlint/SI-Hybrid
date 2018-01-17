import { host } from "../config/config";

export function redirectTo(path) {
        window.location.assign(host + path + '.html')   
}