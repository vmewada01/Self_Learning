import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextWrapper } from "./Context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContextWrapper>
  </StrictMode>
);
