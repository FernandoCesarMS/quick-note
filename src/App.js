import React from "react";
import { useState } from "react";
function App() {
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [idade, setIdade] = useState();
  const [curso, setCurso] = useState();
  const [estado, setEstado] = useState();
  const [cidade, setCidade] = useState();
  const [turno, setTurno] = useState();
  return (
    <div>
      <h1>Novo membro</h1>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      ></input>
      <br /> <br />
      <input
        id="GS"
        type="radio"
        name="cargo"
        value="Gerente Scrum"
        onChange={(e) => setCargo(e.target.value)}
      ></input>
      <label htmlFor="GS">Gerente Scrum</label>
      <br />
      <input
        id="GP"
        type="radio"
        name="cargo"
        value="Gerente de Produtos"
        onChange={(e) => setCargo(e.target.value)}
      ></input>
      <label htmlFor="GP">Gerente de Produtos</label>
      <br />
      <br/>
      <input
        type="text"
        placeholder="Idade"
        onChange={(e) => setIdade(e.target.value)}
      ></input>
      <br/>
      <input
        type="text"
        placeholder="Curso"
        onChange={(e) => setCurso(e.target.value)}
      ></input>
      <input
        id="Diurno"
        type="radio"
        name="turno"
        value="Diurno"
        onChange={(e) => setTurno(e.target.value)}
      ></input>
      <label htmlFor="turno">Diurno</label>
      <input
        id="Noturno"
        type="radio"
        name="turno"
        value="Noturno"
        onChange={(e) => setTurno(e.target.value)}
      ></input>
      <label htmlFor="turno">Noturno</label>
      <br/>
      <input
        type="text"
        placeholder="Estado"
        onChange={(e) => setEstado(e.target.value)}
      ></input>
      <br/>
      <input
        type="text"
        placeholder="Cidade"
        onChange={(e) => setCidade(e.target.value)}
      ></input>
      <br />
      <p>Nome do membro: {nome}</p>
      <p>Cargo do membro: {cargo} </p>
      <p>Idade: {idade}</p>
      <p>Curso: {curso} {turno}</p>
      <p>Estado: {estado}</p>
      <p>Cidade: {cidade}</p>
      
    </div>
  );
}

export default App;
