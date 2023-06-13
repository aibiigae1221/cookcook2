import styled from "styled-components";
import {useState, useRef} from "react";

interface InputProps {
    handleChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    value : string;
    type?: string;
    placeholder: string;
    onBlur?: () => void;
}

const InputText = (props :InputProps) => {
    const {value, handleChange, type, placeholder, onBlur} = props;
    const [isFocusing, setIsFocusing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const setFocus = () => {
        const currRef = inputRef.current;
        if(currRef){
            currRef.focus();
            focusingNow();
        }
    };

    const focusingNow = () => {
        setIsFocusing(true);
    };

    const handleBlur = () => {
        setIsFocusing(false);
        if(onBlur){
            onBlur();
        }
    };

    return (
        <Container>
            {placeholder && (
                <StyledParagraph 
                    onClick={setFocus}
                    isFocusing={isFocusing}   
                >
                    {placeholder}
                </StyledParagraph>
            )}

            <StyledInput 
                value={value} 
                onChange={handleChange} 
                type={type !== undefined ? type : "text"}
                ref={inputRef}
                onFocus={focusingNow}
                onBlur={handleBlur}
                isFocusing={isFocusing}
                
            />
        </Container> 
        
    );
};


const Container = styled.div`
    display: flex;
    flex-direction:column;
    position:relative;
    margin-bottom:40px;
`;

const StyledParagraph = styled.p<{isFocusing: boolean}>`
    display:inline-block; 
    position:absolute;
    font-size:10pt;
    color:${props => props.isFocusing? "#1ebd8d": "#d0622f"};
    top:-20px;
    left:0;
`;

const StyledInput = styled.input<{isFocusing: boolean}>`
    border:0 none;
    outline:none;
    border-bottom:2px solid ${props => props.isFocusing? "#1ebd8d": "#d0622f"};
    font-size:16pt;
    line-height:2;
`;

export default InputText;