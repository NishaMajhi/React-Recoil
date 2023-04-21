// here we import the atom from recoil 
import { atom } from "recoil";

export const inputBox = atom({
    key: "input-box",
    default: "",
})