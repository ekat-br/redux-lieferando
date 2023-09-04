import {  toggledTopping } from "./toppingsSlice";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

export default function ToppingButton({mealId}){
    const dispatch = useDispatch();

    function handleToggleTopping (topping) { 
        dispatch(toggledTopping({mealId, topping}));
    }


    return(
        <Container>
            <span>Add extra toppings: </span>
           <label><input type="checkbox" onChange={() => handleToggleTopping("Cheese")}/>Cheese</label>
           <label><input type="checkbox" onChange={() => handleToggleTopping("Garlic Sauce")}/>Garlic Sauce</label>
           <label><input type="checkbox" onChange={() => handleToggleTopping("Ketchup")}/>Ketchup</label>
        </Container>
    )
}

const Container = styled.div`
color: #457B9D; 
font-weight: bold;
`