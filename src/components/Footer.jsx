import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: cadetblue;
    position: fixed;
    bottom :0;
    width: 100%;
    height: 50px;
`

function Footer(){
    return(
        <FooterStyled>
            This is a footer, maybe
        </FooterStyled>
    )
}

export default Footer;