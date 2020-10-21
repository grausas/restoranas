import React, { useState, useEffect } from "react";
import { Section, Slideshow, Courses } from "../../components";
import * as S from "./Home.styled";
import food from "../../assets/food.png";

function Home() {
  const [starterMeals, setStarterMeals] = useState(null);
  const [soupMeals, setSoupMeals] = useState(null);
  const [mainMeals, setMainMeals] = useState(null);

  useEffect(() => {
    fetch("https://testuoju.azurewebsites.net/main")
      .then((res) => res.json())
      .then((data) => setMainMeals(data));
    fetch("https://testuoju.azurewebsites.net/soup")
      .then((res) => res.json())
      .then((data) => setSoupMeals(data));
    fetch("https://testuoju.azurewebsites.net/starter")
      .then((res) => res.json())
      .then((data) => setStarterMeals(data));
  }, []);
  return (
    <>
      <Slideshow background={food}>
        <Section></Section>
      </Slideshow>
      <S.MenuTitle>Menu</S.MenuTitle>
      <Section>
        <S.MenuBlock>
          {starterMeals && (
            <Courses courseTitle="Starter" array={starterMeals} />
          )}
          {soupMeals && <Courses courseTitle="Soup" array={soupMeals} />}
          {mainMeals && <Courses courseTitle="Main Course" array={mainMeals} />}
        </S.MenuBlock>
      </Section>
    </>
  );
}

export default Home;
