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
            <h1>Order your favorite meal</h1>
            <h2>Meals List</h2>
            <>
                {data.meals.slice(0,visibleMeals).map((meal) => <MealsCard meal={meal}/>)}
                <button onClick={handleShowMoreMeals} disabled={visibleMeals>= data.meals.length}>Show more meals</button>
            </>
        </Container>
    )


}

const Container = styled.div`
text-align: center; 
`