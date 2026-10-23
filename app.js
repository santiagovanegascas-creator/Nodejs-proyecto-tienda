import fg from "picocolors";
import { formatPrecio} from "./utils/formato.js"
console.log("Hola Mundo desde node js")
console.log("este es un cambio")
console.log(fg.red("este es el color rojo"))


console.log(formatPrecio(10400))