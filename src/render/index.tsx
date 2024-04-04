
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'

import Hello from './pages/hello'

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container)


root.render(
    <div>
        <StrictMode>
            <div>hello</div>
            <div id="node-version">123</div>
            <Hello></Hello>
        </StrictMode>
    </div>
)

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // prints out 'pong'
// }

// func()