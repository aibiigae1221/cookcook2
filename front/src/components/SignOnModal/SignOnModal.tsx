import styled from "styled-components";
import {useState} from "react";

import InputText from "../InputText/InputText";
import InputButton from "../InputButton/InputButton";


interface SignOnModalProp {
    hideModal: () => void;   
}

const SignOnModal = (props : SignOnModalProp) => {

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPw2, setUserPw2] = useState("");
    const [userNickname, setUserNickname] = useState("");

    const [showUserIdError, setShowUserIdError] = useState(false);
    const [showUserPwError, setShowUserPwError] = useState(false);
    const [showUserPw2Error, setShowUserPw2Error] = useState(false);
    const [showUserNicknameError, setShowUserNicknameError] = useState(false);


    const handleUserIdChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    };

    const handleUserPwChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserPw(e.target.value);
    };

    const handleUserPwChange2 = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserPw2(e.target.value);
    };

    const handleUserNicknameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserNickname(e.target.value);
    };
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(userId.trim() === "" || userId.trim().length < 3){
            setShowUserIdError(true);
        }

        if(userPw.trim() === "" || userPw.trim().length < 3){
            setShowUserPwError(true);
        }

        if(userPw2.trim() === "" || userPw.trim() !== userPw2.trim()){
            setShowUserPw2Error(true);
        }

        if(userNickname.trim() === "" || userNickname.trim().length < 3){
            setShowUserNicknameError(true);
        }
        
        if(showUserIdError || showUserPwError || showUserPw2Error || showUserNicknameError){
            return;
        }
    };
    
    return (
            <div>
                <h1>회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <InputText handleChange={handleUserIdChange} value={userId} placeholder="아이디를 입력해주세요." onBlur={() => setShowUserIdError(false)} />
                    {showUserIdError && (
                        <ErrorMessage>아이디를 다시 입력해주세요.</ErrorMessage>
                    )}

                    <InputText handleChange={handleUserPwChange} value={userPw} type="password" placeholder="비밀번호를 입력해주세요." onBlur={() => setShowUserPwError(false)} />
                    {showUserPwError && (
                        <ErrorMessage>비밀번호를 다시 입력해주세요.</ErrorMessage>
                    )}

                    <InputText handleChange={handleUserPwChange2} value={userPw2} type="password" placeholder="비밀번호를 다시 입력해주세요." onBlur={() => setShowUserPw2Error(false)} />
                    {showUserPw2Error && (
                        <ErrorMessage>앞서 입력한 비밀번호와 일치시켜주세요.</ErrorMessage>
                    )}

                    <InputText handleChange={handleUserNicknameChange} value={userNickname} placeholder="이름을 입력해주세요." onBlur={() => setShowUserNicknameError(false)} />
                    {showUserNicknameError && (
                        <ErrorMessage>이름을 다시 입력해주세요.</ErrorMessage>
                    )}


                    <ButtonGroup>
                        <InputButton message="가입완료" theme="green" />
                        <InputButton message="닫기" type="button" onClick={props.hideModal}/>
                    </ButtonGroup>
                </form>
            </div>
               
    );
};


const ButtonGroup = styled.div`
    display:flex;
    justify-content:space-between;
    column-gap:5px;
`;

const ErrorMessage = styled.p`
    
    background-color:#e1225e;
    color:#fff;
    line-height:2;
    font-size:12pt;
    transform:translateY(-30px);
    padding:0 10px;

    
    

`;

export default SignOnModal;