import { styled } from "styled-components";
import FavoriteButton from "../favorites/FavoriteButton";
export default function MealsCard({meal}){

    const {strMeal, strMealThumb, strArea} = meal;
    return(
        <Container>
            <MealTitle>{strMeal}</MealTitle>
            <MealImage src={strMealThumb}/>
            <MealType>Origin: {strArea}</MealType>
            <FavoriteButton meal={meal}/>
        </Container>
    );
}

const Container = styled.div`
text-align: center; 
background-color: pink; 
`
const MealTitle = styled.h3`
color: lightblue; 
`
const MealImage = styled.img`
max-width: 100%
`
const MealType = styled.span`
color: blue; 
`