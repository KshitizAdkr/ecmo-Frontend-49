import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { HomePage } from "./pages/HomePage";
// <div id="root"></div>



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>
);
//reactDom
