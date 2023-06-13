import styled from "styled-components";


const WithModal = <P extends Object>(TargetComponent : React.ComponentType<P>) : React.ComponentType<P> => {
    const WrappedComponent = (props : P) => {

        return (
            <BackgroundWrapper>
                <Container>
                    <TargetComponent {...(props as P)} />
                </Container>
            </BackgroundWrapper>
        );
    };

    return WrappedComponent;
};




const BackgroundWrapper = styled.div`
    position:fixed;
    width:120%;
    height:120%;
    margin:-5%;
    padding:0;
    background-color:rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`

    position:fixed;
    background-color:#fff;
    color:#000;
    min-width:200px;
    min-height:400px;
    border:3px solid #000;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    padding:20px;
    z-index:0;
`;

export default WithModal;