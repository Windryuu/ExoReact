import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: brown;
    height: 50px;
`

function Header(){
    return(
        <HeaderStyled>
            this is my header, or my navbar, or whatever
        </HeaderStyled>
    )
}

export default Header;