import { Splash } from "./styles-splash";
import { createRoot } from "react-dom/client";

const container = document.getElementById("splash");
const root = createRoot(container);
root.render(
  <Splash>
    <i>v1.0</i>
  </Splash>
);
