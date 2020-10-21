import React from "react";
import * as S from "./Courses.style";
import { Dish } from "..";

function Course({ courseTitle, array }) {
  return (
    <S.CourseBlock>
      <S.CourseTitle>{courseTitle}</S.CourseTitle>
      {array &&
        array.map((food) => {
          return (
            <Dish
              image={food.image}
              title={food.title}
              ingredients={food.ingredients}
              price={food.price}
            />
          );
        })}
    </S.CourseBlock>
  );
}

export default Course;
