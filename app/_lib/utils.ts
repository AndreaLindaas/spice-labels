"use client"

const PX_IN_CM = 0.026458333;
const pxToCm = (px:number) => {
    if(typeof window !== "undefined"){
        return px * window.devicePixelRatio * PX_IN_CM;
    }
    return px
}

export const cmToPx = (cm:number) => {
    if(typeof window !== "undefined"){
        return cm/(window.devicePixelRatio * PX_IN_CM) 
    }
    return cm
}