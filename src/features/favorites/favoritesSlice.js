import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteMealIds: []
  },
  reducers: {
    toggledFavoriteMeal: (state, action) => {
        const idToToggle = action.payload; 
        if(state.favoriteMealIds.includes(idToToggle)){
             state.favoriteMealIds = state.favoriteMealIds.filter( mealId => mealId !== idToToggle);
        }else{
             state.favoriteMealIds.push(idToToggle);
        }
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    
    },
    },
})

export const { toggledFavoriteMeal } = favoritesSlice.actions

export const selectFavoriteMealIds = (state) => state.favorites.favoriteMealIds;

export default favoritesSlice.reducer