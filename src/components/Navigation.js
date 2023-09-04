import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <NavContainer>  
            <NavLink to="/">🏠Home</NavLink>
            <NavLink to="/favorites">Favorites❤️</NavLink>
        </NavContainer>
    );

}

const NavContainer = styled.div`
background-color: #DD1B2B;
color: #F1FAEE;
position: fixed; 
top: 0;
z-index: 1; 
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 35px;
`
const NavLink = styled(Link)`
text-decoration: none;
color: #fff;
`