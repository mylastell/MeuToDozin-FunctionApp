import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #ACF0AD;
  padding: 10px;
}
h1{
  color: #501687;
}
input{
  margin-top: 10px;
  padding: 1px;
  background-color: #CFACF0;
}
button{
  margin-left:5px;
  padding: 1px;
}

`;
const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const handleClick = () => {
    const BolsaInput = {
      value: input,
      id: Date.now()
    };

    setList((prevState) => [...prevState, BolsaInput]);
    setInput("");
  };

  function DeleteTask(id) {
    const ListaFilter = list.filter((item) => item.id !== id);
    setList(ListaFilter);
  }

  return (
    <div>
      <GlobalStyle />
      <h1>Lista dos Sonhos:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          🦋
        </button>
      </form>
      <ul>
        {list.map((item) => (
          <li>
            {item.value}{" "}
            <Button
              onClick={() => {
                DeleteTask(item.id);
              }}
            >
              🧹
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
