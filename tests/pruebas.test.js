const {
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
} = require('../homework');

describe('Evolucion de ECMAScript', () => {
  describe('Operador ternario', () => {
    test('debe devolver "mayor" para edad 18 o superior', () => {
      expect(usarOperadorTernario(18)).toBe('mayor');
      expect(usarOperadorTernario(30)).toBe('mayor');
    });

    test('debe devolver "menor" para edad menor a 18', () => {
      expect(usarOperadorTernario(17)).toBe('menor');
    });
  });

  describe('Sistema de modulos (CommonJS y ESM)', () => {
    test('debe leer constantes desde CommonJS con require', () => {
      expect(leerModuloCommonJS()).toBe('Node.js >=22');
    });

    test('debe leer constantes desde ESM con import dinamico', async () => {
      await expect(leerModuloESM()).resolves.toBe('ES Modules | import/export');
    });
  });

  describe('Spread operator', () => {
    test('debe combinar arrays respetando el orden', () => {
      expect(combinarArraysConSpread([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('debe combinar objetos con prioridad del override', () => {
      expect(
        combinarObjetosConSpread(
          { lenguaje: 'js', nivel: 'basico' },
          { nivel: 'intermedio', enfoque: 'backend' },
        ),
      ).toEqual({ lenguaje: 'js', nivel: 'intermedio', enfoque: 'backend' });
    });
  });

  describe('Rest parameters', () => {
    test('debe recolectar notas en un array', () => {
      expect(recolectarNotas('programacion', 8, 9, 10)).toEqual({
        materia: 'programacion',
        notas: [8, 9, 10],
      });
    });
  });

  describe('Operadores ?? y ?.', () => {
    test('debe devolver color existente si esta definido', () => {
      const usuario = { preferencias: { color: 'azul' } };
      expect(obtenerPreferenciaColor(usuario)).toBe('azul');
    });

    test('debe devolver "sin-preferencia" cuando no existe color', () => {
      const usuario = {};
      expect(obtenerPreferenciaColor(usuario)).toBe('sin-preferencia');
    });
  });

  describe('Desestructuracion', () => {
    test('debe extraer propiedades con alias', () => {
      const perfil = {
        nombre: 'Ana',
        edad: 21,
        direccion: { ciudad: 'Santiago del Estero' },
      };

      expect(desestructurarPerfil(perfil)).toEqual({
        nombrePersona: 'Ana',
        edadPersona: 21,
        ciudadActual: 'Santiago del Estero',
      });
    });
  });

  describe('Clases y herencia', () => {
    test('debe crear una instancia de Persona con presentacion', () => {
      const persona = new Persona('Juan', 25);
      expect(persona.presentarse()).toBe('Soy Juan y tengo 25 anios.');
    });

    test('debe extender Persona en Estudiante usando super', () => {
      const estudiante = new Estudiante('Lu', 20, 'Ingenieria');
      expect(estudiante).toBeInstanceOf(Estudiante);
      expect(estudiante).toBeInstanceOf(Persona);
      expect(estudiante.presentarse()).toBe('Soy Lu y tengo 20 anios. Estudio Ingenieria.');
    });
  });

  describe('Clase Date', () => {
    test('debe calcular diferencia entera de dias entre fechas UTC', () => {
      const inicio = new Date('2026-05-01T00:00:00.000Z');
      const fin = new Date('2026-05-10T00:00:00.000Z');
      expect(diasEntreFechas(inicio, fin)).toBe(9);
    });
  });

  describe('Concurrencia vs paralelismo', () => {
    test('debe devolver explicaciones basicas en un objeto', () => {
      expect(explicarConcurrenciaYParalelismo()).toEqual({
        concurrencia: expect.any(String),
        paralelismo: expect.any(String),
      });
    });
  });

  describe('Promesas', () => {
    test('promesaDemorada debe resolver con el valor esperado', async () => {
      jest.useFakeTimers();
      const promesa = promesaDemorada('listo', 50);
      jest.advanceTimersByTime(50);
      await expect(promesa).resolves.toBe('listo');
      jest.useRealTimers();
    });

    test('promesaConValidacion debe resolver cuando numero es valido', async () => {
      await expect(promesaConValidacion(7)).resolves.toBe('ok:7');
    });

    test('promesaConValidacion debe rechazar cuando numero es negativo', async () => {
      await expect(promesaConValidacion(-1)).rejects.toThrow('numero-invalido');
    });
  });
});
