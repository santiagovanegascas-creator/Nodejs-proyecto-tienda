import pc from "picocolors";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import { productos } from "./data/productos.js";
import { buscarPorId, listarAgotados, valorInventario, listarPorCategoria } from "./servicios/inventario.js";

// Mensajes de bienvenida con colores
console.log(pc.green("API Mi Tienda de Barrio"));
console.log(pc.yellow("En construcción"));
console.log(pc.blue("Bienvenido/a"));

console.log("\n--- PRUEBAS DE FORMATO ---");
console.log(formatearPrecio(8400));
console.log(formatearPrecio(270700));
console.log(formatearNombre("leche 1 L"));

console.log("\n--- LISTA DE PRODUCTOS ---");
console.table(productos);
console.log(`La tienda tiene ${productos.length} productos`);

console.log("\n--- BUCLE PRODUCTOS ---");
for (const p of productos) {
  console.log(`${p.nombre} ${formatearPrecio(p.precio)}`);
}

console.log("\n--- SERVICIOS ---");
console.log("Producto 3:", buscarPorId(3).nombre);
console.log("Agotados:", listarAgotados().length);
console.log("Valor del inventario:", formatearPrecio(valorInventario()));
console.log("Productos de granos:", listarPorCategoria("granos").length);