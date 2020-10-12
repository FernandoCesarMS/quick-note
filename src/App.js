import React from "react";
import Membro from "./Membro";
import Title from "./Title";
const braga = {
  nome: "Arthur Braga",
  idade: 19,
  cargo: "Gerente de produtos",
  curso: "Engenharia de Sistemas",
};

const lima = {
  nome: "Arthur Lima",
  idade: 19,
  cargo: "Gerente scrum",
  curso: "Engenharia Elétrica",
};

const joaozinho = {
  nome: "Johnny Ferreira",
  idade: 19,
  cargo: "Gerente scrum",
  curso: "Engenharia Controle e Automação",
};

function App() {
  return (
    <div>
      <Title title="Membros" subtitle="Legais">
        <Membro membro={braga} />
        <Membro membro={lima} />
        <Membro membro={joaozinho} />
      </Title>
    </div>
  );
}

export default App;
