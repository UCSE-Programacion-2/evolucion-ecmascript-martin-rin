// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  // Devuelve "mayor" si edad >= 18, y "menor" en caso contrario.
  // Tu codigo:
}

function leerModuloCommonJS() {
  // Importa datos desde "./modulos/constantes-cjs.cjs" usando require.
  // Devuelve un string con el formato: "<nombreMotor> <versionObjetivo>"
  // Tu codigo:
}

async function leerModuloESM() {
  // Importa datos desde "./modulos/constantes-esm.mjs" usando import dinamico.
  // Devuelve un string con el formato: "<standardModulo> | <sintaxisImport>"
  // Tu codigo:
}

function combinarArraysConSpread(base, extras) {
  // Devuelve un nuevo array con todos los elementos de base seguidos por extras.
  // Tu codigo:
}

function combinarObjetosConSpread(base, override) {
  // Devuelve un nuevo objeto donde "override" pisa las claves repetidas de "base".
  // Tu codigo:
}

function recolectarNotas(materia, ...notas) {
  // Rest parameter: devuelve un objeto con la materia y el array de notas.
  // Tu codigo:
}

function obtenerPreferenciaColor(usuario) {
  // Usa optional chaining y nullish coalescing.
  // Si usuario.preferencias.color existe, devolvelo.
  // Caso contrario devolve "sin-preferencia".
  // Tu codigo:
}

function desestructurarPerfil(perfil) {
  // Extrae con alias:
  // - nombre -> nombrePersona
  // - edad -> edadPersona
  // - ciudad desde perfil.direccion.ciudad -> ciudadActual
  // Devuelve { nombrePersona, edadPersona, ciudadActual }.
  // Tu codigo:
}

class Persona {
  constructor(nombre, edad) {
    // Tu codigo:
  }

  presentarse() {
    // Devuelve: "Soy <nombre> y tengo <edad> anios."
    // Tu codigo:
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // Tu codigo:
  }

  presentarse() {
    // Usa super.presentarse() y agrega:
    // " Estudio <carrera>."
    // Tu codigo:
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  // Recibe dos objetos Date y devuelve la diferencia entera en dias.
  // Tu codigo:
}

function explicarConcurrenciaYParalelismo() {
  // Devuelve un objeto:
  // {
  //   concurrencia: "...",
  //   paralelismo: "..."
  // }
  // Tu codigo:
}

function promesaDemorada(valor, ms) {
  // Devuelve una Promise que resuelve "valor" despues de "ms" milisegundos.
  // Tu codigo:
}

function promesaConValidacion(numero) {
  // Devuelve una Promise:
  // - resolve: "ok:<numero>" si numero es >= 0
  // - reject: Error("numero-invalido") si numero < 0
  // Tu codigo:
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};
