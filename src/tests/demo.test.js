describe('Pruebas en demo',()=>{
    test('deben de ser iguales',()=>{
        // 1. Inicialización
        const mensaje = "Hola mundo";
        // 2. Estímulo
        const mensaje2 = `Hola mundo`;
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});

