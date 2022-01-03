import styled,{ createGlobalStyle, css} from "styled-components";
// import theme from "./Themes/themes"
export const GlobalStyle= createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
*{
    box-sizing:border-box;
    padding:0;
    margin: 0;
}
body{
    font-family: 'Space Grotesk', sans-serif;
    background:${(props)=>props.theme.color.bg};
}

li{
    list-style-type:none;
}
a{
    color:unset;
    text-decoration:none
}
img{
    width:100%;
    height:100%;
    display:block;
}
h1{
    font-size:4rem;
    letter-spacing: 10px;
    line-height: 50px;
    @media ${(props)=>props.theme.breakPoints.xl}{
        font-size: 3.5rem;
        line-height: 30px;
        color:yellow;
    }
    @media ${(props)=>props.theme.breakPoints.lg}{
        font-size: 3rem;
        line-height: 25px;
    }
    @media ${(props)=>props.theme.breakPoints.md}{
        font-size: 2.5rem;
        line-height: 20px;
    }
    @media ${(props)=>props.theme.breakPoints.sm}{
        font-size: 2rem;
        line-height: 20px;
    }
}
h2{
    font-size:3rem;
    letter-spacing: 5px;
    line-height: 40px;
    @media ${(props)=>props.theme.breakPoints.xl}{
        font-size: 2.5rem;
        line-height: 30px;
       
    }
    @media ${(props)=>props.theme.breakPoints.lg}{
        font-size: 2.5rem;
        line-height: 25px;
    }
    @media ${(props)=>props.theme.breakPoints.md}{
        font-size: 2rem;
        line-height: 20px;
    }
}  
h3{
    font-size:1.2rem;
    letter-spacing: 1px;
    line-height: 20px;
  
}

`
export const Container= css`
width:100%;
max-width:1400px;
padding-left: 3rem;
padding-right: 3rem;
margin-right:auto;
margin-left:auto;

@media ${(props)=>props.theme.breakPoints.md}{
    padding-left: 1rem;
    padding-right: 1rem;
}
`

export const Button = styled.button`
border:none;
outline:none;
padding:${({small})=>small?"0.5rem 1rem":"1rem 2rem"};
cursor:pointer;
background:${({remove})=>(remove ?"#F50057":"#3F51B5")};
color:${({theme})=>theme.color.white};
font-size:1.1rem;
font-weight: 600;
box-shadow:5px 5px 15px #fff;
margin-right: ${({margin})=>margin ?"2rem":0};
`