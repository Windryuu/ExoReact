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

function Sidebar(){
    return(
        <SidebarStyled>
            <LinkSidebarStyled href="/" >lien 1</LinkSidebarStyled>
            <LinkSidebarStyled href="/" >lien 2</LinkSidebarStyled>
            <LinkSidebarStyled href="/" >lien 3</LinkSidebarStyled>
            <LinkSidebarStyled href="/" >lien 4</LinkSidebarStyled>
        </SidebarStyled>
    )
}

export default Sidebar;