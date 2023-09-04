import { styled } from "styled-components";
import FavoriteButton from "../favorites/FavoriteButton";
import ToppingButton from "../toppings/ToppingButton";
export default function MealsCard({meal}){

    const {strMeal, strMealThumb, strArea, idMeal} = meal;
    return(
        <Container>
            <MealTitle>{strMeal}</MealTitle>
            <MealImage src={strMealThumb}/>
            <MealType>Origin: {strArea}</MealType>
            <FavoriteButton meal={meal}/>
            <ToppingButton mealId={idMeal}/>
        </Container>
    );
}

const Container = styled.div`
background-color: pink; 
border-radius: 4px; 
margin: 50px auto;
max-width: 500px;
height: auto;
background-color: #F1FAEE;
padding: 20px auto;
`
const MealTitle = styled.h2`
color: #E63946; 
margin-top: 20px;
font-wright: 200;
`
const MealImage = styled.img`
display: block;
max-width: 100%;
height: auto;
`
const MealType = styled.span`
color: #457B9D; 
font-weight: bold;
display: block;
`