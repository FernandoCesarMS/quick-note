import React from "react";

function App() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function clicou() {
    numeros = numeros.map((elemento) => {
      return elemento*2;
    });
    console.log(numeros);
    //numeros.forEach((elemento) =>{
    //  console.log(elemento);
    //});
  }
  return (
    <div>
      <h1> Hello World!</h1>
      <h1>{numeros[2]}</h1>
      <button onClick={() => clicou(20)}>+ um</button>
    </div>
  );
}

export default App;
