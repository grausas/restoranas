import React from "react";
import * as S from "./Header.style";

import { Section } from "../";

function Header() {
  return (
    <S.Header>
      <Section>
        <S.Actions>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/menu">Menu</S.StyledLink>
          <S.StyledLink to="/services">Services</S.StyledLink>
          <S.StyledLink to="/gallery">Gallery</S.StyledLink>
          <S.StyledLink to="/blog">Blog</S.StyledLink>
          <S.StyledLink to="/contactus">Contact us</S.StyledLink>
        </S.Actions>
      </Section>
    </S.Header>
  );
}

export default Header;
