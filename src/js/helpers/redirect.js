import { host } from "../config/config";

export function redirectTo(path) {
        window.location.href = path + '.html';
}