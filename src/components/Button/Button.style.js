import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#333" : "#111")};
  color: ${(props) => (props.color === "primary" ? "#fff" : "#eee")};
  outline: none;
  border: none;
  padding: 0.8em 1.5em;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.color === "primary" ? "#222" : "#e8e8e8")};
    color: ${(props) => (props.color === "primary" ? "#fff" : "#111")};
  }
  &:focus {
    background: ${(props) => (props.color === "primary" ? "#111" : "#e3e3e3")};
  }
`;
