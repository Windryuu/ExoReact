import styled from "styled-components";

function AtomicButtonStyled(props){
    return(
    <ButtonStyled 
        borderColor={props.borderColor}
        buttonWidth={props.buttonWidth}    
    >{props.textButton}</ButtonStyled>
    )
}

export default AtomicButtonStyled;

const ButtonStyled = styled.button`
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid   ${props => props.borderColor ? props.borderColor : "palevioletred"};
    width:              ${props => props.buttonWidth ? props.buttonWidth : "50%"};
    justify-self: center;
`