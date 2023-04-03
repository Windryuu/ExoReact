import styled from "styled-components";

function AtomicImageStyled(props){
    return(
        <ImageStyled src={props.imageSource} />
    )
}

export default AtomicImageStyled;

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
`