import styled from "styled-components";

const SidebarStyled = styled.div`
    height: 100%;
    width: 160px;
    position : fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    padding-top: 20px;
`

const LinkSidebarStyled = styled.a`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ad0d0d;
    display: block;
`

const ButtonStyled = styled.button`
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid ${props => props.borderColor ? props.borderColor : "palevioletred"};
`

function Sidebar(){
    return(
        <SidebarStyled>
            <LinkSidebarStyled href="/" >lien 1</LinkSidebarStyled>
            <LinkSidebarStyled href="/" >lien 2</LinkSidebarStyled>
            <ButtonStyled borderColor="blue">Bonsoir</ButtonStyled>
            <br/>
            <ButtonStyled>Bonjour</ButtonStyled>
        </SidebarStyled>
    )
}

export default Sidebar;