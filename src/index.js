import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "normalize.css";
import * as S from "./index.style";

ReactDOM.render(
  <React.StrictMode>
    <S.BodyBlock>
      <Routes />
    </S.BodyBlock>
  </React.StrictMode>,
  document.getElementById("root")
);
