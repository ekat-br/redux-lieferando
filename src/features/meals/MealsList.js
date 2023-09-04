import { useGetAllMealsQuery } from "../api/apiSlice"

export default function MealsList() {

    const {data, isLoading, isError} = useGetAllMealsQuery();
    
    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data...</div>
    }

    return(
        <>
            <h2>Meals List</h2>
            <>
                {data.meals.map((meal) => 
                <article key={meal.idMeal}>
                    <span>{meal.strMeal}</span>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                </article>
                )}
            </>
        </>
    )


}