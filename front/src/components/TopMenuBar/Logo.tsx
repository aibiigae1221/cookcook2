import {Link} from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
    return (
        <StyledLink to={"/"}>COOKCOOK</StyledLink>
    );
};

const StyledLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    font-size:25pt;
    
`;

export default Logo;