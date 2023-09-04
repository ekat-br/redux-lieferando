import { useGetAllMealsQuery } from "../api/apiSlice"
import { styled } from "styled-components";
import MealsCard from "./MealsCard";
import { useState } from "react";

export default function MealsList() {
    const [visibleMeals, setVisibleMeals] = useState(3);
    const {data, isLoading, isError} = useGetAllMealsQuery();
    
    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data...</div>
    }

    function handleShowMoreMeals(){
        setVisibleMeals(visibleMeals+2);
    }

    return(
        <Container>
            <Title>Order your favorite meal</Title>
            <>
                {data.meals.slice(0,visibleMeals).map((meal) => <MealsCard meal={meal} key={meal.idMeal}/>)}
                <Button onClick={handleShowMoreMeals} disabled={visibleMeals>= data.meals.length}>Show more meals</Button>
            </>
        </Container>
    )


}

const Title = styled.h2`
color: #013378;
`

const Container = styled.div`
text-align: center; 
margin-top: 50px;
`
const Button = styled.button`
background-color: #1D3557;
color: #F1FAEE;
border: none; 
border-radius: 4px;
padding: 8px 16px;
margin: 20px auto;

&:hover{
    background-color: #013378;
}
`