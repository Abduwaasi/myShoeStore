import styled from "styled-components";

export const CartWrapper = styled.div`
margin-top:3rem;
display:grid;
  
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(100%/ (4 + 1) + 0.1%, 350px, 100%), 1fr)
  );
gap:1rem;

`
export const CartFooter =styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom:3rem;
@media ${({theme})=>theme.breakPoints.md}{
   flex-direction:column;
   align-items:flex-start;
   justify-content: space-between;
}
`
export const Subtotal =styled.h3`
font-size:2.5rem;
font-weight:500;

@media ${({theme})=>theme.breakPoints.sm}{
    font-size:1.5rem;
}

`
export const ButtonGroup =styled.div`
display:flex;
justify-content:space-between;
@media ${({theme})=>theme.breakPoints.md}{
   margin-top:2rem;
}
@media ${({theme})=>theme.breakPoints.sm}{
    flex-direction: column;
    height:120px;
    
}


`
export const Container = styled.div`
background:${({theme})=>theme.color.bg};
margin:3rem auto;
`