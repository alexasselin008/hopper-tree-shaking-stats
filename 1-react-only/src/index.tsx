import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const root = createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

function App() {
    return (
        <div>
            <h1 className="header">Test Application</h1>
            <div></div>
        </div>
    )
}
