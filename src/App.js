import React from 'react'
import styled, {ThemeProvider} from "styled-components"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, GlobalStyle } from './globalStyle'
import { Cart, Checkout, Navbar,Products, Stepper } from './Components'
import theme from './Themes/themes'



const AppWrapper = styled.div`
background: ${props=>props.theme.color.bg};
${Container}

`



const App = () => {
    return (
          
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
              <Router>
                <Navbar/> 
                <AppWrapper>
                <Switch>
                    <Route exact path="/">
                      <Products/>
                    </Route>
                    <Route exact path="/cart">
                    <Cart/>
                    </Route>
                    <Route exact path="/checkout">
                    <Checkout/>
                    </Route>
                </Switch>
            </AppWrapper>
          </Router>
            
        </ThemeProvider>
    )
}

export default App
