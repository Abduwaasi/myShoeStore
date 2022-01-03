import styled from "styled-components";
export const SingleProduct = styled.article`
display:flex;
flex-direction:column;
justify-content:stretch;
background: ${({theme})=>theme.color.grey};
height:100%;

`
export const ProductImg = styled.div`
width:60%;
height:150px;
margin: 0.5rem auto;


`
export const ProductFooter = styled.div`
background: ${({theme})=>theme.color.white};
padding:1rem 0.5rem;
height:180px;
`
export const TitleContainer = styled.div`
display:flex;
justify-content: space-between;
padding-bottom:1rem;


h3:nth-child(1){
    flex-basis:75%;
}
h3:nth-child(2){
    flex-basis:20%;
}
`
export const Description = styled.p`
color:${({theme})=>theme.color.text};
font-weight: 300;
letter-spacing: 1.4px;
`
export const CardAction = styled.div`
display:flex;
justify-content:flex-end;
align-items: flex-end;
height:70px;
`
export const AddToCart = styled.button`
width:2.5rem;
height:2.5rem;
background: transparent;
outline: none;
border:none;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
cursor:pointer;
transition: all .3s ease;

:hover{
    background: ${({theme})=>theme.color.grey};
}


`