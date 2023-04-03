import styled from "styled-components";
import AtomicImageStyled from "../atoms/AtomicImageStyled";
import AtomicButtonStyled from "../atoms/AtomicButtonStyled";

function MoleculeCardItem(props){

    return(
        <CardItemStyled>
            <AtomicImageStyled imageSource={props.imageSource}/>
            <AtomicButtonStyled textButton={props.textButton} buttonWidth={props.buttonWidth}></AtomicButtonStyled>
        </CardItemStyled>
    )
}

export default MoleculeCardItem;

const CardItemStyled = styled.div`
    background-color: brown;
    height: 80px;
    width: 80px;
    margin-left: 170px;
    margin-bottom: 50px;
    `