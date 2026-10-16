interface Usuario {
  nombre: string;
  edad: number;
}

const persona: Usuario = {
  nombre: "Carlos",
  edad: 30
};

console.log(`Hola ${persona.nombre}, tu edad es ${persona.edad}`);