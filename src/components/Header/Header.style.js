import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #00aa33;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 0.8em;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.15em;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
