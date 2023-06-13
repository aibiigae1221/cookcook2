import styled from 'styled-components';
import Logo from './Logo';


const TopMenuBar = () => {
    return (
        <Container>
            <Logo />
            <StyledUl>
                <StyledLi>로그인</StyledLi>
                <StyledLi>회원가입</StyledLi>
                <StyledLi>About</StyledLi>

            </StyledUl>
        </Container>
    );
};


const StyledLi = styled.li`
    padding-left:20px;
    
`

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