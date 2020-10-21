import styled from "styled-components";

export const DishBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const DishImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
  flex: 1;
`;

export const DishText = styled.div`
  margin-right: 10px;
  text-transform: uppercase;
  align-items: center;
  flex: 4;
`;
export const DishTitle = styled.div`
  font-weight: 600;
`;
export const DishIngredients = styled.div`
  font-size: 0.7em;
`;
export const DishPrice = styled.div`
  font-weight: 600;
  font-size: 1.2em;
  float: right;
  color: #f00;
`;
