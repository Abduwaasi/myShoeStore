import styled from "styled-components";
export const CartArticle = styled.article`
display:flex;
flex-direction: column;
justify-content: stretch;
background:${({theme})=>theme.color.grey};
box-shadow:5px 5px 10px ${({theme})=>theme.color.bg};
max-width:300px;
`
export const CartMedia = styled.div`
height:250px;
width:60%;
margin:1rem auto;

`
export const CartContent = styled.div`

padding:1rem;
background:${({theme})=>theme.color.white};

`
export const TitleGroup = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
`
export const Title = styled.h4`
font-size:1.4rem;
font-weight: 500;
line-height:20px;
`
export const Price = styled.h6`
font-size:1.1rem;
font-weight: 500;
`
export const CartAction = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;

div{
display:flex;
justify-content: space-between;
align-items: center;
flex:0.5;  
}
`
export const CartButton = styled.button`
border:none;
outline: none;
background: transparent;
padding:0.4rem 0.8rem;
transition: background-color .3s ease;
cursor:pointer;

:hover{
background:${({theme})=>theme.color.bg}
}
`
export const Quantity = styled.p`
font-weight:600;
`