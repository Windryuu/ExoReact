import { Link } from "react-router-dom";
import styled from "styled-components";
// import { ConsoleLogger } from "../App";

function Sidebar(props){
    const superConsoleLoggerRef = props.sclr;
    const aaa = props.parentfunction;
    return(
        <SidebarStyled>
            <LinkSidebarStyled href="/" >lien 1</LinkSidebarStyled>
            <LinkSidebarStyled href="/bleep" >lien 2</LinkSidebarStyled>
            {/* <Link to="/">No reload 1</Link> */}
            <ButtonStyled borderColor="blue" 
            // onClick={ConsoleLogger}
            >Bonsoir</ButtonStyled>
            <br/>
            <button onClick={()=> superConsoleLoggerRef.current.DubConsoleLogger()}>BLOOP</button>
            <br/>
            <button onClick={aaa}>BLOOP troisième</button>
            <br/>
            <ButtonStyled onClick={()=>console.log("Tu viens de cliquer sur le bouton bonjour")}>Bonjour</ButtonStyled>
        </SidebarStyled>
    )
}

export default Sidebar;

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