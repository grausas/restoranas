import React from "react";
import * as S from "./Slideshow.style";
import { Section, Button } from "../";

function Slideshow({ children }) {
  return (
    <S.SlideShowBlock>
      <Section>
        <S.SlideContainer>
          {children}
          <S.SlideText>
            <h1>Vegan Restaurant Bootstrap Website Template</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </S.SlideText>
          <Button> GET FREE DOWNLOAD</Button>
        </S.SlideContainer>
      </Section>
    </S.SlideShowBlock>
  );
}

export default Slideshow;
