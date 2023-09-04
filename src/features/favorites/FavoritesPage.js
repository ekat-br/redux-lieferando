import { useGetAllMealsQuery } from "../api/apiSlice";
import { selectFavoriteMealIds } from "./favoritesSlice";
import { styled } from "styled-components";
import MealsCard from "../meals/MealsCard";
import { useSelector } from "react-redux";

export default function FavoritesPage(){
    const favoriteMealIds = useSelector(selectFavoriteMealIds);
    const {data, isLoading, isError} = useGetAllMealsQuery();

    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data...</div>
    }
    console.log("favoriteMealIds", favoriteMealIds);
    console.log("data", data);

    

    const favoriteMeals = data.meals.filter((meal) => favoriteMealIds.includes(meal.idMeal));

    console.log(favoriteMeals);

    return(
        <Container>
            <Title>Order your favorite meal</Title>
            <>
                {favoriteMeals.map((meal) => <MealsCard meal={meal} key={meal.idMeal}/>)}
                
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
