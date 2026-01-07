import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import RouterConfig from "./router/routerConfig";
import "./assets/globals.css"
// <div id="root"></div>



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig/>
  </StrictMode>
);
//reactDom
