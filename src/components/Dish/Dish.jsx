import React from "react";
import * as S from "./Dish.style";

function Dish({ image, title, ingredients, price }) {
  return (
    <S.DishBlock>
      <S.DishImage src={image} alt="Meal" />
      <S.DishText>
        <S.DishTitle>{title} </S.DishTitle>
        <S.DishIngredients> {ingredients} </S.DishIngredients>
      </S.DishText>
      <S.DishPrice>&euro;{price}</S.DishPrice>
    </S.DishBlock>
  );
}

export default Dish;
