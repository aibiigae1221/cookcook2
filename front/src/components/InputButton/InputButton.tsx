import styled from "styled-components";

interface InputButtonProps {
    message : string;
    type?: "button" | "submit";
    theme?: "green" | "red" | "blue";
    onClick?: () => void;
}

const InputButton = (props : InputButtonProps) => {
    const {message, type, theme, onClick} = props;

    let backgroundColor;
    let color;
    switch(theme){

        case "green":
            backgroundColor = "#49a41c";
            color = "#fff";
            break;

        case "red":

            break;

        case "blue":
            break;
        
        default:
            break;
    }

    return (
        <StyledButton 
            type={type !== undefined? type : "submit"}
            backgroundColor={backgroundColor}
            color={color}
            onClick={onClick !== undefined? onClick : undefined}
        >
            {message}
        </StyledButton>
    );
};


const StyledButton = styled.button<{backgroundColor?: string; color?: string; }>`
    background-color:${props => props.backgroundColor !== undefined? props.backgroundColor : "#000"};    
    color:${props => props.color !== undefined? props.color : "#fff"};
    border:0 none;
    line-height:2.5;
    border-radius:5px;
    flex-grow:1;
    cursor:pointer;


`;


export default InputButton;