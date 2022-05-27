import { colores } from "./colores.js";
import { body } from "./HTMLtipe.js";
export function CambioColorbody() {
    const color = colores;
    const ColorPosision = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[ColorPosision];
}
