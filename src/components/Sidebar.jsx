import styled from "styled-components";
import AtomicButtonStyled from "../atoms/AtomicButtonStyled";
// import { ConsoleLogger } from "../App";

function Sidebar(props){
    const superConsoleLoggerRef = props.sclr;
    const aaa = props.parentfunction;
    return(
        <SidebarStyled>
            <LinkSidebarStyled href="/" >lien 1</LinkSidebarStyled>
            <LinkSidebarStyled href="/bleep" >lien 2</LinkSidebarStyled>
            <AtomicButtonStyled borderColor="blue" textButton="bonsoir"></AtomicButtonStyled>
            <br/>
            <button onClick={()=> superConsoleLoggerRef.current.DubConsoleLogger()}>BLOOP</button>
            <br/>
            <button onClick={aaa}>BLOOP troisième</button>
            <br/>
            <AtomicButtonStyled onClick={()=>console.log("Tu viens de cliquer sur le bouton bonjour")} textButton="Bonjour"></AtomicButtonStyled>
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