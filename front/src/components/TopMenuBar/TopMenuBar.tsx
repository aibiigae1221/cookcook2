import styled from 'styled-components';
import Logo from './Logo';
//import LoginModal from '../LoginModal/LoginModal';
import SignOnModal from '../SignOnModal/SignOnModal';
import {useState} from "react";
import WithModal from '../WithModal/WithModal';

const TopMenuBar = () => {

    
    const [showSignOnModal, setShowSignOnModal] = useState(false);

    const showUpSignOnModal = () => {
        setShowSignOnModal(true);
    };

    const hideSignUpModal = () => {
        setShowSignOnModal(false);
    };

    return (
        <Container>
            <Logo />
            <StyledUl>
                <StyledLi>로그인</StyledLi>
                <StyledLi><StyledAnchor href="#" onClick={showUpSignOnModal}>회원가입</StyledAnchor></StyledLi>
                <StyledLi>About</StyledLi>

            </StyledUl>

            {/* <LoginModal /> */}

            {showSignOnModal === true && (
                <SignOnWithModal hideModal={hideSignUpModal}/>
            )}
            
            
        </Container>
    );
};

const SignOnWithModal = WithModal(SignOnModal);

const StyledLi = styled.li`
    padding-left:20px;
    
`

const StyledAnchor = styled.a`
    color:#fff;
    text-decoration:none;

`;

const StyledUl = styled.ul`
    list-style-type:none;
    padding:0;
    margin:0;
    line-height:3;
    display:flex;

`;

const Container = styled.div`
    background-color:rgba(0,0,0, 0.7);
    color:#fff;
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    

`;


export default TopMenuBar;