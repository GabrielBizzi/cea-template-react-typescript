import { App } from "./app/App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("renderer");
const root = createRoot(container);
root.render(<App />);
