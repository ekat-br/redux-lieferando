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
    
    },
    },
})

export const { toggledFavoriteMeal } = favoritesSlice.actions

export const favoriteMealIds = (state) => state.favorites.favoriteMealIds;

export default favoritesSlice.reducer