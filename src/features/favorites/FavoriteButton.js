import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteMealIds, toggledFavoriteMeal } from "./favoritesSlice";
import { styled } from "styled-components";
export default function FavoriteButton({meal}){
    const {idMeal} = meal;
    const dispatch = useDispatch(); 

    function handleAddFavorite(){
    dispatch(toggledFavoriteMeal(idMeal));
    }

    const isFavorite = useSelector(selectFavoriteMealIds).includes(meal.idMeal);

    return(
        <>
            <Button onClick={handleAddFavorite}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</Button>
        </>
    );
}

const Button = styled.button`
background-color: #E63946;
color: #F1FAEE;
border: none; 
border-radius: 4px;
padding: 8px 16px;
margin: 20px auto;
&:hover{
    background-color: #DD1B2B;
}
`