import styled from "styled-components";
import {useState} from "react";

const LoginModal = () => {

    const [userId, setUserId] = useState("");

    return (
        <Container>
            <h1>로그인</h1>



        </Container>
    );
};


const Container = styled.div`

    position:fixed;
    background-color:#fff;
    color:#000;
    width:600px;
    height:400px;
    border:3px solid #000;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    
`;

export default LoginModal;