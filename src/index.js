import React from "react";
import reactDom from "react-dom";
import App from "./App"
import AppProvider from "./Context"

reactDom.render(
    <AppProvider>
        <App/>
    </AppProvider>,
    document.getElementById("root"))