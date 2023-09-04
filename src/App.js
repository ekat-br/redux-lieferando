import MealsList from "./features/meals/MealsList";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoritesPage from "./features/favorites/FavoritesPage";


function App() {
  return (
    <>
    
     <Router>
      <Navigation/> 
        <Routes>
          <Route exact path="/" element={<MealsList/>}/>
          <Route exact path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
    </Router>

    </>
   
  )
}

export default App;
