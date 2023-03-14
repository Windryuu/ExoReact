import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: brown;
    height: 50px;
`

function Header(props){
    const log = props.loger
    const loged = props.loged
    return(
        <HeaderStyled>
            this is my header, or my navbar, or whatever
            <button onClick={log}>Log</button>
            {loged && <p>Utilisateur déconnecté</p>}
            {!loged && <p>Utilisateur connecté</p>}
        </HeaderStyled>
    )
}

export default Header;