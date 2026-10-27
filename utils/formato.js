// Funciones de formato y cálculo de dinero
export const formatearPrecio = (valor) => `$ ${valor.toLocaleString("es-CO")}`;

export const formatearNombre = (texto) => texto.toUpperCase();