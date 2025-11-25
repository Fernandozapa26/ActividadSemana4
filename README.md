# Proyecto Semana 2

Este proyecto incluye ejemplos básicos de funcionalidades en JavaScript para practicar control de versiones con Git y organización del código.

---

## Requisitos
Asegúrate de tener instalado:
- Node.js
- Git

---

## Cómo ejecutar el proyecto
Para ejecutar cualquier archivo .js, usa el siguiente comando en la terminal:

node ruta/del/archivo.js

Ejemplo:
node features/calculator.js

---

## Ejemplos de uso

1. Función de suma (calculator.js)
const { sum } = require('./features/calculator');
console.log(sum(5, 3)); // Resultado: 8

2. Validación de email (validation.js)
const { validateEmail } = require('./utils/validation');
console.log(validateEmail("test@mail.com")); // true
console.log(validateEmail("")); // false

---

## Notas
- Este proyecto es para practicar ramas, commits y control de versiones con Git.
- Cada funcionalidad está separada por carpetas para mejor organización.
- Sigue las buenas prácticas de mensajes de commit.

---

## Fin de la documentación
