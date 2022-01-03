import styled from "styled-components"
export const AppBar = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
background:${(props)=>props.theme.color.white};
height:80px;
width:100%;
max-width:1400px;
padding-left:3rem;
padding-right:3rem;
margin-left:auto;
margin-right:auto;
border-bottom:2px solid ${(props)=>props.theme.color.bg};
position:sticky;
left:0;
top:0;
z-index:10;

@media ${({theme})=>theme.breakPoints.md}{
   padding-left:1.5rem;
  padding-right:1.5rem; 
}
@media ${({theme})=>theme.breakPoints.sm}{
   padding-left:1rem;
  padding-right:1rem; 
}
`
export const NavbarLogo = styled.div`
display:flex;
`
export const NavbarLogoImg = styled.div`
width:2rem;
height:2rem;
border-radius:50%;
margin-right:1rem;
@media ${({theme})=>theme.breakPoints.md}{
  width:1.5rem;
 height:1.5rem;
}
`
export const NavbarLogoText = styled.div`
font-size:1.5rem;
color:${({theme})=>theme.color.title};
text-transform:capitalize;
font-weight:700;

@media ${({theme})=>theme.breakPoints.md}{
 font-size:1rem;
}

`
export const CartButton = styled.button`
outline:none;
border:transparent;
background:transparent;
width:3rem;
height:3rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
position:relative;
cursor:pointer;
transition:all .3s ease;

:hover{
 background:${({theme})=>theme.color.bg};
}
`
export const CartIcon = styled.div``
export const Badge = styled.nav`
position:absolute;
right:0;
top:0;
background:${({theme})=>theme.color.red};
width:1.5rem;
height:1.5rem;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
`