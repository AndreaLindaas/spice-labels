const PX_IN_CM = 0.026458333;
const pxToCm = (px:number) => {
    return px * window.devicePixelRatio * PX_IN_CM;
}

const cmToPx = (cm:number) => {
 return cm/(window.devicePixelRatio * PX_IN_CM) 
}