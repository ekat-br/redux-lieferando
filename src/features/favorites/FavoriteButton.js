import { useDispatch } from "react-redux";
import { toggledFavoriteMeal } from "./favoritesSlice";
export default function FavoriteButton({meal}){
    const {idMeal} = meal;
    const dispatch = useDispatch(); 

    function handleAddFavorite(){
    dispatch(toggledFavoriteMeal(idMeal));

    }

    return(
        <>
            <button onClick={handleAddFavorite}>Add to Favorites</button>
        </>
    );
}