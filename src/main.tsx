import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import RouterConfig from "./router/routerConfig";
import "./assets/globals.css"
import { Toaster } from "sonner";
// <div id="root"></div>



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig/>
    <Toaster 
      richColors 
      closeButton 
    />
  </StrictMode>
);
//reactDom
